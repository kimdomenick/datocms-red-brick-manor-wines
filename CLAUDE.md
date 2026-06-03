# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A Gatsby v4 static site for "Red Brick Manor Wines" (a wine-making blog), sourcing nearly all content from a DatoCMS project via GraphQL. Originated from the DatoCMS Gatsby blog starter and customized into a blog + recipes site.

## Commands

```
yarn install        # install dependencies
yarn develop        # dev server with live reload (alias: yarn start) → http://localhost:8000
yarn build          # production build → ./public
yarn serve          # serve the production build locally
yarn clean          # clear Gatsby's .cache and public (run when GraphQL/schema changes misbehave)
```

There is no test suite, linter, or formatter configured. The GraphQL explorer (GraphiQL) is at `http://localhost:8000/___graphql` while `yarn develop` is running — use it to inspect the DatoCMS schema and prototype queries.

## Environment

Requires a `.env` file (gitignored) before any build or dev run:

```
DATO_API_TOKEN=<read-only DatoCMS API token>
DATO_ENVIRONMENT=<optional DatoCMS environment name>
```

Without `DATO_API_TOKEN`, `gatsby-source-datocms` cannot fetch content and builds will fail or produce an empty site.

## Architecture

**Content source.** `gatsby-config.js` wires `gatsby-source-datocms` to pull all content (posts, recipes, authors, site/SEO metadata) from DatoCMS at build time. Content is queried in GraphQL via `datoCms*` node types — e.g. `datoCmsPost`, `datoCmsRecipe`, `datoCmsBlog`, `datoCmsSite`. Pages and components colocate a `graphql` query export with the React component; data arrives as the `data` prop.

**Routing.** Pages live in `src/pages/`. Static routes map to files (`index.js`, `about.js`, `blog.js`, `recipe.js`, `404.js`). Dynamic routes use Gatsby's File System Route API with the brace syntax:
- `src/pages/posts/{DatoCmsPost.slug}.js` → `/posts/:slug` (one page per `DatoCmsPost`)
- `src/pages/recipes/{DatoCmsRecipe.slug}.js` → `/recipes/:slug` (one page per `DatoCmsRecipe`)

These dynamic-route files receive `$id` as a query variable and fetch the single matching record.

**Page composition.** Every page follows the same shell: `<Container>` wraps `<Header />` (which includes `<Menu />`) and the page body, with `<Footer />` placed outside the container. Listing pages (`index.js`, `recipe.js`, `blog.js`) fetch a sorted/limited collection and render preview components (`hero-post`, `more-stories`, `recipe-preview`, `more-recipes`).

**Images.** Use `gatsby-plugin-image`: `GatsbyImage` for CMS-sourced images (queried via `gatsbyImageData(...)` fragments) and `StaticImage` for hardcoded/remote URLs (see `about.js`). DatoCMS image URLs are `datocms-assets.com` and support imgix params in the query.

**Structured Text vs. plain fields.** Posts (`DatoCmsPost.content`) use DatoCMS Structured Text, rendered by `post-body.js` with `<StructuredText>` from `react-datocms`. Its `renderBlock` handles embedded blocks by `__typename` (currently only `DatoCmsImageBlock`). Recipes, by contrast, use plain multiline string fields (`description`, `ingredients`, `instructions`, `notes`) that `recipes/{...}.js` splits on `\n` into `<p>` tags via a local `splitText` helper; `endResults` is raw HTML rendered with `dangerouslySetInnerHTML`.

**SEO / head.** `HelmetDatoCms` (from `gatsby-source-datocms`) consumes `seoMetaTags` and `faviconMetaTags` fragments queried from `datoCmsSite`/`datoCmsBlog`.

## Styling

Tailwind CSS (v3) via `gatsby-plugin-postcss`. Global styles import in `gatsby-browser.js` (`src/styles/global.css` then `src/styles/custom.css`). Long-form prose uses the `@tailwindcss/typography` plugin classes (`prose prose-lg prose-blue`). `tailwind.config.js` extends the theme with custom `accent-*` colors, font sizes, and shadows; custom component CSS (e.g. the mobile `menu-mobile`/`menu-desktop` and `hover-spec`) lives in `custom.css`.

## Notes / gotchas

- `recipe/*.mdx` files exist and `gatsby-source-filesystem` points at the `recipe/` directory, but no MDX transformer is installed and these files are **not** the source of recipe pages — recipe pages come from the `DatoCmsRecipe` model. Treat the MDX files as inert leftovers unless wiring up MDX intentionally.
- The DatoCMS content model (field names, block types, models) lives in the DatoCMS project, not this repo. To add a field to a page, add it to both the GraphQL query and the component; verify the field exists via GraphiQL first.

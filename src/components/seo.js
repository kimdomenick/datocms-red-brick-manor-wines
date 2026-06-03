import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

// Shared SEO component, rendered inside each page's Gatsby `Head` export.
// `title` is composed with the site title from siteMetadata. `tags` accepts
// the `tags` arrays produced by DatoCMS's seoMetaTags / faviconMetaTags
// fragments; any title tag in there is dropped so our title wins.
export default function Seo({ title, tags = [], children }) {
  const { title: siteTitle } = useSiteMetadata();
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <>
      <title>{pageTitle}</title>
      {tags.map((tag, index) => {
        if (tag.tagName === "title") return null;
        const attributes = tag.attributes || {};
        if (tag.tagName === "meta") {
          return <meta key={index} {...attributes} />;
        }
        if (tag.tagName === "link") {
          return <link key={index} {...attributes} />;
        }
        return null;
      })}
      {children}
    </>
  );
}

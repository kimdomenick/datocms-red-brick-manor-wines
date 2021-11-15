import React from "react";
import { graphql } from "gatsby";
import Container from "../../components/container";
import Header from "../../components/header";

export default function Recipe({ data: { recipe } }) {
  return (
    <Container>
      <Header />
      <article>
        <h1>{recipe.title}</h1>
        <h2>{recipe.description}</h2>
      </article>
    </Container>
  );
}

export const query = graphql`
  query RecipeBySlug($id: String) {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    recipe: datoCmsRecipe(id: { eq: $id }) {
      title
      slug
      description
      ingredients
      instructions
      notes
      prepping {
        fluid(
          imgixParams: { fm: "jpg" }
          sizes: "(max-width: 1500px) 100vw, 1500px"
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;

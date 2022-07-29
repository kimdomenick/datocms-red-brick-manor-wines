import React from "react";
import { graphql } from "gatsby";
import Container from "../../components/container";
import PostTitle from "../../components/post-title";
import Footer from "../components/footer";

export default function Recipe({ data: { recipe } }) {
  return (
    <>
      <Container>
        <article>
          <PostTitle>{recipe.title}</PostTitle>
          <section className="recipe__description">
            <div className="max-w-2xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                  Description
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  {recipe.description}
                </p>
              </div>
            </div>
          </section>
          <section className="recipe__ingredients">
            <div className="max-w-2xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                  Ingredients
                </h2>
                {recipe.ingredients}
              </div>
            </div>
          </section>
          <section className="recipe__instructions">
            <div className="max-w-2xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                  Instructions
                </h2>
                {recipe.instructions}
              </div>
            </div>
          </section>
          <section className="recipe__notes">
            <div className="max-w-2xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                  Notes
                </h2>
                {recipe.notes}
              </div>
            </div>
          </section>
        </article>
      </Container>
      <Footer />
    </>
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

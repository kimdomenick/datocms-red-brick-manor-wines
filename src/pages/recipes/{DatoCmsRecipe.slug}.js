import React from "react";
import { graphql } from "gatsby";
import Container from "../../components/container";
import PostTitle from "../../components/post-title";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Recipe({ data: { recipe } }) {
  function splitText(text) {
    return (
      <div>
        {text.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    );
  }
  const prepping = recipe.prepping;
  console.log("prepping", prepping);

  return (
    <>
      <Container>
        <Header />
        <article>
          <section className="recipe_title">
            <div className="max-w-2xl mx-auto">
              <PostTitle>{recipe.title}</PostTitle>
            </div>
          </section>
          <section className="recipe__description">
            <div className="max-w-2xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                  Description
                </h2>
                {splitText(recipe.description)}
              </div>
            </div>
          </section>
          <section className="recipe__ingredients">
            <div className="max-w-2xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                  Ingredients
                </h2>
                {splitText(recipe.ingredients)}
              </div>
            </div>
          </section>
          {recipe.prepping && (
            <section className="recipe__prepping">
              <div className="max-w-2xl mx-auto">
                <div className="prose prose-lg prose-blue">
                  <GatsbyImage image={recipe.prepping[0].gatsbyImageData} />
                </div>
              </div>
            </section>
          )}
          <section className="recipe__instructions">
            <div className="max-w-2xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                  Instructions
                </h2>
                {splitText(recipe.instructions)}
              </div>
            </div>
          </section>
          {recipe.finishing && (
            <section className="recipe__prepping">
              <div className="max-w-2xl mx-auto">
                <div className="prose prose-lg prose-blue">
                  <GatsbyImage image={recipe.finishing[0].gatsbyImageData} />
                </div>
              </div>
            </section>
          )}
          {recipe.notes && (
            <section className="recipe__notes">
              <div className="max-w-2xl mx-auto">
                <div className="prose prose-lg prose-blue">
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
                    Notes
                  </h2>
                  {splitText(recipe.notes)}
                </div>
              </div>
            </section>
          )}
        </article>
      </Container>
      <Footer />
    </>
  );
}

export const query = graphql`
  query RecipeBySlug($id: String) {
    recipe: datoCmsRecipe(id: { eq: $id }) {
      title
      slug
      description
      ingredients
      instructions
      notes
      prepping {
        gatsbyImageData(layout: CONSTRAINED, width: 672)
      }
      finishing {
        gatsbyImageData(layout: CONSTRAINED, width: 672)
      }
    }
  }
`;

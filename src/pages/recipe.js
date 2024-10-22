import React from "react";
import Container from "../components/container";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import { Link } from "gatsby";
import PostTitle from "../components/post-title";
import Intro from "../components/intro";
import MoreRecipes from "../components/more-recipes";
import Header from "../components/header";

const RecipePage = ({ data }) => {
  const page_title = "Recipes";
  const recipePost = data.allDatoCmsRecipe.nodes;

  return (
    <>
      <Container pageTitle="Recipes">
        <Header />
        <Intro />
        <main>
          <PostTitle>{page_title}</PostTitle>
          <p>
            Wine recipes aren't all that different from one another. You have
            whatever juice you want to ferment, yeast, sugar, and a few other
            additives. What makes recipes unique are the different strains of
            yeast, different amounts of this or that additive, different
            sweetness levels, and different aging times.
          </p>
          <p>
            Sometimes processes vary, depending on the type of wine, but the
            basic steps from fermentation to bottle are largely the same.
          </p>
          <p>
            Here are some of my own wine recipes along with some wine recipe
            kits I've tried. See pictures, read about my process, end results
            after aging, and more...
          </p>
          <ul>
            {data.allDatoCmsRecipe.nodes.map((node) => {
              return (
                <li key={node.title}>
                  <Link
                    to={`/recipes/${node.slug}`}
                    className="hover:underline"
                  >
                    {node.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <MoreRecipes posts={recipePost} />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  query Recipes {
    allDatoCmsRecipe(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;

export default RecipePage;

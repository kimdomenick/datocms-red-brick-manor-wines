import React from "react"
import Container from "../components/container";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import { Link } from "gatsby";
import PostTitle from "../components/post-title";

const RecipePage = ({ data }) => {
  const page_title = "Recipes";

  return (
    <>
      <Container pageTitle="Recipes">
        <main>
          <PostTitle>{page_title}</PostTitle>
          <p>
            Here are some of the wine recipes I've created and experimented
            with. See pictures, read about end results after aging, and more...
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
        </main>
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  query Recipes {
    allDatoCmsRecipe {
      nodes {
        title
        slug
        description
      }
    }
  }
`;

export default RecipePage
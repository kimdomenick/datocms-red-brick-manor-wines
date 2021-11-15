import React from "react"
import Container from "../components/container"
import Intro from "../components/intro"
import { graphql } from "gatsby"
import Footer from "../components/footer";

const RecipePage = ({ data }) => {
  return (
    <>
      <Container pageTitle="Recipes">
        <main>
          <Intro />
          <p>Some weird wine recipes.</p>
          <ul>
            {data.allDatoCmsRecipe.nodes.map((node) => {
              return <li key={node.title}>{node.title}</li>;
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
import React from "react"
import Container from "../components/container"
import Intro from "../components/intro"
import { graphql } from "gatsby"

const RecipePage = ({data}) => {
  return (
    <Container pageTitle="Recipes">
      <main>
        <Intro />
        <p>Some weird wine recipes.</p>
        <ul>
          { data.allFile.nodes.map(node => {
            return (
              <li key={node.name}>
                {node.name}
              </li>
            )
          })}
        </ul>
      </main>
    </Container>
    
  )
}

export const query = graphql`
  query Recipes {
    allFile(filter: {dir: {regex: "/recipe/"}}) {
      nodes {
        name
      }
    }
  }
`

export default RecipePage
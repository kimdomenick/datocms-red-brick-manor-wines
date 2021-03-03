import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Intro from "../components/intro"

const AboutPage = () => {
  return (
    <Container pageTitle="About Me">
      <main>
        <Intro />
        <Link to="/">Back to Home</Link>
        <p>My name is Kim. I like web development and making wine!</p>
      </main>
    </Container>
    
  )
}

export default AboutPage
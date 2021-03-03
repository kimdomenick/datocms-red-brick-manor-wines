import React from "react"
import Container from "../components/container"
import Intro from "../components/intro"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Container pageTitle="About Me">
      <main>
        <Intro />
        <StaticImage 
          src="https://www.datocms-assets.com/43836/1614721285-dandelion.jpg" 
          alt="dandelions"
          layout="fullWidth" 
        />
        <p>My name is Kim. I like web development and making wine!</p>
      </main>
    </Container>
    
  )
}

export default AboutPage
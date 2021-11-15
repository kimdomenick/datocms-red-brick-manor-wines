import React from "react"
import Container from "../components/container"
import Intro from "../components/intro"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <>
      <Container pageTitle="About Red Brick Manor Wines">
        <main>
          <Intro />
          <StaticImage
            src="https://www.datocms-assets.com/43836/1614721285-dandelion.jpg"
            alt="dandelions"
            layout="fullWidth"
          />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
            What we do
          </h2>
          <p>
            Farmhouse-style wines can be made from just about anything: fruits,
            vegetables, flowers and othe edible plants. There are so many more
            options than just grapes, although we experiment with grapes, too.
            Mostly what you'll find here are recipes and blogs on
            non-traditional wines made with locally-grown or wild ingredients.
          </p>
          <p>
            Red Brick Manor Wines does not sell or distribut wine at this time.
            But we are not opposed to bartering.
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
            The science of wine-making:
          </h2>
          <p>Ferment. Bottle. Wait. Wait some more.</p>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage
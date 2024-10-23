import React from "react";
import Container from "../components/container";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/footer";
import Header from "../components/header";
import PostTitle from "../components/post-title";

const AboutPage = () => {
  return (
    <>
      <Container pageTitle="About Red Brick Manor Wines">
        <Header />
        <main>
          {/* <StaticImage
            src="https://www.datocms-assets.com/43836/1614721285-dandelion.jpg"
            alt="dandelions"
            layout="fullWidth"
          /> */}
          <PostTitle>What We Do</PostTitle>
          <div className="prose prose-lg prose-blue mb-16 mt-16">
            <p>
              Farmhouse-style wines can be made from just about anything:
              fruits, vegetables, flowers and othe edible plants. There are so
              many more options than just grapes, although we experiment with
              grapes, too. Mostly what you'll find here are recipes and blogs on
              non-traditional wines made with locally-grown or wild ingredients.
            </p>
            <p>
              Red Brick Manor Wines does not sell or distribute wine at this
              time. But we are not opposed to bartering.
            </p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
            The science of wine-making
          </h2>
          <p className="prose prose-lg prose-blue">
            Ferment. Bottle. Wait. Wait some more.
          </p>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-16 md:gap-y-20 mb-32 mt-8">
            <div>
              <StaticImage
                height={300}
                src="https://www.datocms-assets.com/43836/1623431361-20190421110522.jpg"
              />
            </div>
            <div>
              <StaticImage
                height={300}
                src="https://www.datocms-assets.com/43836/1623431376-201906151618101.jpg"
              />
            </div>
            <div>
              <StaticImage
                height={300}
                src="https://www.datocms-assets.com/43836/1702930476-maksym-kaharlytskyi-3ujt73tr4hi-unsplash.jpg"
              />
            </div>
          </div>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

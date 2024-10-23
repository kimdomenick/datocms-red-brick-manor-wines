import React from "react";
import Container from "../components/container";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/footer";
import Header from "../components/header";
import PostTitle from "../components/post-title";
import { Link } from "gatsby";

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
          <hr />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
            Wines by the Season
          </h2>
          <div className="prose prose-lg prose-blue mb-16 mt-16">
            <p>
              <strong>WINTER</strong>
            </p>
            <p>
              The colder months are the perfect opportunity to try Wine
              Ingredient Kits or Fruit Concentrates. This is when we typically
              start a batch of{" "}
              <a
                href="https://www.midwestsupplies.com/collections/wine-recipe-kits/products/zinfandel-white-master-vintner-winemakers-reserve"
                target="_blank"
              >
                White Zinfandel
              </a>{" "}
              or a fun, fruity blend that will be ready to drink by June or
              July.{" "}
            </p>
            <p>
              <strong>SPRING</strong>
            </p>
            <p>
              While waiting for the summer fruits and berries, we experiment
              with Spring's flowers, like{" "}
              <Link to="/recipes/dandelion-wine">Dandelion</Link> and
              Honeysuckle.
            </p>
            <p>
              <strong>SUMMER</strong>
            </p>
            <p>
              Summer is all about the berries and other fruits. From{" "}
              <Link to="/recipes/berry-wine">Red Raspberries</Link> to Apricots,
              we try it all! We're fortunate to have Mulberry and Cherry trees,
              along with wild Red and Black Raspberry vines throughout our
              property.
            </p>
            <p>
              <strong>FALL</strong>
            </p>
            <p>
              Fall is the time to visit local orchards for{" "}
              <Link to="/recipes/pear-wine">Pears</Link>, Peaches and Apples.
              This is also time to start whatever batch of wine we'll be giving
              out to friends and family for the holidays, like this{" "}
              <a
                href="https://www.midwestsupplies.com/collections/wine-recipe-kits/products/island-mist-strawberry-watermelon-white-shiraz-old"
                target="_blank"
              >
                Strawberry Watermelon Shiraz
              </a>{" "}
              that's been a repeated hit.
            </p>
          </div>
          <hr />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
            The science of wine-making
          </h2>
          <p className="prose prose-lg prose-blue mt-8 mb-8">
            Ferment. Bottle. Wait. Wait some more.
          </p>

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

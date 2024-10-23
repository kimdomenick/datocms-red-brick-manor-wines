import React from "react";
import Container from "../components/container";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import MoreStories from "../components/more-stories";
import Header from "../components/header";

const BlogPage = ({ data }) => {
  const blogPost = data.allDatoCmsPost.nodes;

  return (
    <>
      <Container pageTitle="Blog">
        <Header />
        <main>
          <MoreStories posts={blogPost} heading="All Articles" />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  query Blogs {
    allDatoCmsPost(sort: { fields: date, order: DESC }) {
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

export default BlogPage;

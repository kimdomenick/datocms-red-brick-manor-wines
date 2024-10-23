import React from "react";
import Container from "../components/container";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import PostTitle from "../components/post-title";
import MoreStories from "../components/more-stories";
import Header from "../components/header";

const BlogPage = ({ data }) => {
  const page_title = "Blog";
  const blogPost = data.allDatoCmsPost.nodes;

  return (
    <>
      <Container pageTitle="Blog">
        <Header />
        <main>
          <PostTitle>{page_title}</PostTitle>
          <div className="prose prose-lg prose-blue mb-16">
            <p>Explore all posts.</p>
          </div>
          <MoreStories posts={blogPost} />
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

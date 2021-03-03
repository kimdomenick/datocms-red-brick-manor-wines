require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Red Brick Manor Wines",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "3e5f3c25f64da974e3a4535d39adce",
        environment: "main",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipe`,
        path: `${__dirname}/recipe/`,
      },
    }
  ],
};

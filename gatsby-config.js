
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ross Whitehouse`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID || '',
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Space Mono`
        ]
      }
    }
  ],
}

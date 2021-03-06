require('dotenv').config({
  path: `.env.${process.env.Node_ENV}`
});

module.exports = {
siteMetadata: {
  title: 'Gatsby Blog',
  description: `ITDEV-164 Gatsby Blog.`,
  author:`Ejaz Khan`,
  contact: {
    name:'Ejaz Khan',
    company: 'Blogs Inc.',
    address:`PO Box 1234`
  }

  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: `${process.env.SPACE_ID}`,
      accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', 
      },
    },
          'gatsby-plugin-offline',
  ],
}

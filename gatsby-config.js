module.exports = {
  siteMetadata: {
    title: 'GRITTYCITY',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GRITTYCITY',
        short_name: 'GRITTYCITY',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/ICON.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

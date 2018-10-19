module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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

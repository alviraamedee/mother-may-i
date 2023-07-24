/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Watch Full Mother, May I? (2023) Movie - At Home Online Streaming Here's How`,
    description: `13 secs ago - To day update movie Mother, May I? with HBO films (sorted by popularity ascending). Take 5 with watch Mother, May I? (2023) to Downloading or watching streaming the full movie Mother, May I? online will be available to watch full Mother, May I? online on official Netflix's very soon!. To submit an email request for support, go to official hulu.com and click help at the bottom of the page Mother, May I? watch full online. Customer can contact hulu by phone or email. Save who you can save. How to watch full Mother, May I? (2023) good movies on HBO max, Netflix nordic's first original series from norway, beforeigners is about two.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

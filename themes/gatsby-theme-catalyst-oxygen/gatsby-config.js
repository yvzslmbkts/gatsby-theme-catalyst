module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          //Default options are:
          // contentPath: `content/pages`,
          // assetPath: `content/assets`,
          // displaySiteLogo: true,
          // displaySiteTitle: true,
          // displaySiteLogoMobile: true,
          // displaySiteTitleMobile: true,
          // invertLogo: false,
          // useStickyHeader: false,
          // useSocialLinks: true,
          // useColorMode: true,
          //footerContentLocation: "left", // "left", "right", "center"
        },
      },
      `gatsby-theme-catalyst-blog`,
      `gatsby-theme-catalyst-header-side`,
      `gatsby-theme-catalyst-footer`,
    ].filter(Boolean),
  }
}

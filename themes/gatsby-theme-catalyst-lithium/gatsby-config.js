module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-helium`,
        options: {
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          displaySiteLogo: themeOptions.displaySiteLogo,
          displaySiteTitle: themeOptions.displaySiteTitle,
          displaySiteLogoMobile: themeOptions.displaySiteLogoMobile,
          displaySiteTitleMobile: themeOptions.displaySiteTitleMobile,
          invertLogo: themeOptions.invertLogo,
          useStickyHeader: themeOptions.useStickyHeader,
          useSocialLinks: themeOptions.useSocialLinks,
          useColorMode: themeOptions.useColorMode,
          footerContentLocation: themeOptions.footerContentLocation, // "left", "right", "center"
        },
      },
      `gatsby-theme-catalyst-header-bigtop`,
      `gatsby-theme-catalyst-footer`,
      {
        resolve: `gatsby-theme-catalyst-sanity`,
        options: {
          sanityProjectId: themeOptions.sanityProjectId,
          sanityDataset: themeOptions.sanityDataset,
          sanityToken: themeOptions.sanityToken,
          sanityWatchMode: themeOptions.sanityWatchMode,
          sanityOverlayDrafts: themeOptions.sanityOverlayDrafts,
          sanityCreatePages: themeOptions.sanityCreatePages,
          sanityCreatePosts: themeOptions.sanityCreatePosts,
          sanityCreatePostsList: themeOptions.sanityCreatePostsList,
          sanityCreateProjects: themeOptions.sanityCreateProjects || false,
          sanityCreateProjectsList:
            themeOptions.sanityCreateProjectsList || false,
          pagePath: themeOptions.pagePath,
          sanityPostPath: themeOptions.sanityPostPath,
          sanityProjectPath: themeOptions.sanityProjectPath,
        },
      },
    ].filter(Boolean),
  }
}

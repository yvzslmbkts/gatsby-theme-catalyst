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
          footerContentLocation: themeOptions.footerContentLocation || "right",
          displaySiteLogo: themeOptions.displaySiteLogo || false,
          displaySiteTitle: themeOptions.displaySiteTitle || true,
          displaySiteLogoMobile: themeOptions.displaySiteLogoMobile || false,
          displaySiteTitleMobile: themeOptions.displaySiteTitleMobile || true,
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
          sanityCreateProjects: themeOptions.sanityCreateProjects,
          sanityCreateProjectsList: themeOptions.sanityCreateProjectsList,
          pagePath: themeOptions.pagePath,
          sanityPostPath: themeOptions.sanityPostPath,
          sanityProjectPath: themeOptions.sanityProjectPath,
        },
      },
    ].filter(Boolean),
  }
}

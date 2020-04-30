import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here.
  variants: {
    siteTitle: {
      fontSize: [4, null, 7, 8, 9],
      textTransform: "uppercase",
      letterSpacing: "widest",
    },
    navLink: {
      textTransform: "uppercase",
    },
  },
})

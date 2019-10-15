/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./site-logo"
import Title from "./site-title"

const SiteBranding = () => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        displaySiteLogo
        displaySiteTitle
      }
    }
  `)
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
      }}
    >
      {data.catalystConfig.displaySiteLogo ? <Logo /> : null}
      {data.catalystConfig.displaySiteTitle ? <Title /> : null}
    </div>
  )
}

export default SiteBranding

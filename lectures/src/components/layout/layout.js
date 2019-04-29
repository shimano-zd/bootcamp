/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import { GlobalStyle } from "./style"
const Layout = ({ children, headerImage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="layout_root" style={{ height: "100%" }}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} image={headerImage} />
        <div
          id="layout_content"
          style={{
            margin: `0 auto`,
            paddingTop: 0,
            width: "100%",
            height: "calc(100% - 41px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <main
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              height: "100%",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

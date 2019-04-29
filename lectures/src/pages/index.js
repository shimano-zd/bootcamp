import React from "react"
import { Link, graphql } from "gatsby"
import "./post.css"
import Layout from "../components/layout/layout"
import Sidebar from "../components/sidebar/sidebar"
import SEO from "../components/seo/seo"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import TextLoop from "react-text-loop"
const IndexPage = props => {
  console.log({ props })
  return (
    <Layout>
      <SEO title="Lemon Mint bootcamp" />
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <div
          style={{
            opacity: 0.7,
            position: "absolute",
            backgroundColor: "#1E3C00",
            height: "calc(100% - 42px)",
            width: "100%",
          }}
        />
        <BackgroundImage
          style={{
            height: "100%",
            width: "100%",
            color: "white",
          }}
          fluid={props.data.headerBgImage.childImageSharp.fluid}
        >
          <div
            style={{
              zIndex: 100,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontSize: "19px",
                margin: "auto",
              }}
            >
              <TextLoop style={{ wordWrap: "break-word" }}>
                <span style={{ wordWrap: "break-word" }}>
                  {" "}
                  Join us and learn programming in JavaScript
                </span>
                <span style={{ wordWrap: "break-word" }}>
                  Join us and learn how to build user interface using HTML/CSS
                </span>
                <span style={{ wordWrap: "break-word" }}>
                  Join us and learn ReactJs framework
                </span>
                <span style={{ wordWrap: "break-word" }}>
                  Join us and learn how to build mobile apps with react-native
                </span>
              </TextLoop>
              <Link
                to="/lectures"
                style={{
                  padding: "10px",
                  color: "white",
                  alignSelf: "center",
                  marginTop: "20px",
                  background: "#4BB462",
                  borderRadius: "4px",
                }}
              >
                <div style={{ color: "white" }}>Go To Course</div>
              </Link>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  )
}
export default IndexPage
export const listQuery = graphql`
  query RootQuery {
    headerBgImage: file(relativePath: { eq: "home_bg.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 2000, maxHeight: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1
        style={{
          margin: "60px 0",
        }}
      >
        Interaction & Experience Designer
      </h1>
      <small
        style={{
          opacity: 0.75,
        }}
      >
        FOCUS
      </small>
      <h3 className="lightText">
        Prototype-driven design exploration of mobile apps
      </h3>

      <h4
        className="lightText"
        style={{
          margin: "140px"
        }}
      >
        I'm contracting at Disney and live in Seattle with my wife Carmen. I
        believe in portfolios, but I don't share Disney-related work online.
      </h4>

      <p>
        Let's talk. Get in touch: <a href="mailto:by72mena@gmail.com">Email</a>{" "}
        -{" "}
        <a href="https://twitter.com/72mena" target="_blank">
          Twitter
        </a>{" "}
        -{" "}
        <a href="https://www.linkedin.com/in/jlfloresmena/" target="_blank">
          LinkedIn
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage

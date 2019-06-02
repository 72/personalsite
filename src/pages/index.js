import React from "react"
import { Link } from "gatsby"

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
          opacity: 0.5,
        }}
      >
        I specialize in
      </small>
      <h3 className="lightText">
        Prototype-driven design exploration for mobile apps and user research
      </h3>
      <div
        style={{
          margin: "60px 0",
        }}
      >
        <small
          style={{
            opacity: 0.5,
          }}
        >
          Currently
        </small>
        <p>
          I'm contracting at Disney and live in Seattle with my wife Carmen.
          <br />I believe in portfolios, but I don't share Disney-related work
          online.
        </p>

        {/* <small
          style={{
            opacity: 0.5,
          }}
        >
          Education
        </small>
        <p>
          Bachelor's Degree in Graphic Design
          <br />
          <small>Universidad Autónoma de Nuevo León</small>
        </p>
        <p>
          Certificate, Human-Computer Interaction for User Experience Design
          <br />
          <small>
            MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)
          </small>
        </p> */}

        <p>
          Let's talk. Get in touch:{" "}
          <a href="mailto:by72mena@gmail.com">Email</a> -{" "}
          <a href="https://twitter.com/72mena" target="_blank">
            Twitter
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

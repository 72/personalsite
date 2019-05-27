import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 className="lightText">Juan F Mena</h3>
    <h1>Interaction & Experience Designer</h1>
    <h3 className="lightText borders">
      I specialize in design tooling and user research focused prototyping of
      mobile apps.
    </h3>
    <p>
      I'm contracting at Disney, and live in Seattle with my wife Carmen. <br />
      I believe in portfolios, but I don't share Disney-related work online.
    </p>
    <p>
      <p>
        Let's talk, get in touch by{" "}
        <a href="mailto:by72mena@gmail.com">email</a> or through{" "}
        <a href="https://twitter.com/72mena" target="_blank">
          Twitter
        </a>
      </p>
    </p>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

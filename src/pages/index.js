import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Assets
import figma from "../images/tools/figma.png"
import framer from "../images/tools/framer.png"
import principle from "../images/tools/principle.png"
import flutter from "../images/tools/flutter.png"
import penpaper from "../images/tools/penpaper.png"

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

      {/* <div className="homegrid-container">
          <div className="description">
            <h3>Design tools</h3>
            <p>I'm currently hacking with</p>
          </div>
          <div className="content">
            <div className="tools-grid">
              <div>
                <img src={figma} />
                <p>Figma</p>
              </div>
              <div>
                <img src={framer} />
                <p>Framer</p>
              </div>
              <div>
                <img src={principle} />
                <p>Principle</p>
              </div>
              <div>
                <img src={flutter} />
                <p>Flutter</p>
              </div>
              <div>
                <img src={penpaper} />
                <p>Pen & Paper</p>
              </div>
            </div>
          </div>
        </div> */}

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

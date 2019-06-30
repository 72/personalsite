import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Assets
import avatar72 from "../images/72avatar.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="nameSection">
      <div>
        <img src={avatar72} alt={"Avatar"} />
      </div>
      <div>
        <h2>
          Juan Flores Mena
          <br />
          Interaction & Experience Designer
        </h2>
      </div>
    </div>
    <p className="homeDescription">
      At Disney Parks & Resorts I’ve focused on feature ideation and
      prototype-driven design exploration of mobile apps.
    </p>
    <div className="sectionPanel">
      <h2>Work</h2>
      <p>
        I believe in portfolios, but I don't share Disney related work online.
        </p>
        <p>
        This is a list of experiments I’ve done to explore solutions on Disney
        projects.
      </p>
    </div>
    

    
    <p>
      Let's talk. Get in touch:
      <br /> <a href="mailto:by72mena@gmail.com">Email</a> -{" "}
      <a href="https://twitter.com/72mena" target="_blank">
        Twitter
      </a>{" "}
      -{" "}
      <a href="https://www.linkedin.com/in/jlfloresmena/" target="_blank">
        LinkedIn
      </a>
    </p>
  </Layout>
)

export default IndexPage

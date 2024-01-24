import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Assets - Random Walks
import rw1 from "../images/randomWalks/rw01.png"
import rw2 from "../images/randomWalks/rw02.png"
import rw3 from "../images/randomWalks/rw03.png"
import rw4 from "../images/randomWalks/rw04.png"
import rw5 from "../images/randomWalks/rw05.png"
import rw6 from "../images/randomWalks/rw06.png"
import rw7 from "../images/randomWalks/rw07.png"
import rw8 from "../images/randomWalks/rw08.png"
import rw9 from "../images/randomWalks/rw09.png"
import rw10 from "../images/randomWalks/rw10.png"
import rw11 from "../images/randomWalks/rw11.png"
import rw12 from "../images/randomWalks/rw12.png"
import rw13 from "../images/randomWalks/rw13.png"
import rw14 from "../images/randomWalks/rw14.png"
import rw15 from "../images/randomWalks/rw15.png"
import rw16 from "../images/randomWalks/rw16.png"
import rw17 from "../images/randomWalks/rw17.png"
import rw18 from "../images/randomWalks/rw18.png"
import rw19 from "../images/randomWalks/rw19.png"
import rw20 from "../images/randomWalks/rw20.png"
import rw21 from "../images/randomWalks/rw21.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="intro-description writing">
      <h5>DRAWINGS</h5>
      <p>Drawing is a way for my mind to take<br /> random walks and find new places.</p>
    </div>

    <Drawing image={rw1} title="Untitled 25" description="2020" />
    <Drawing image={rw2} title="Space cadet" description="2020" />
    <Drawing image={rw3} title="Untitled 12" description="2020" />
    <Drawing image={rw4} title="Paul" description="2020" />
    <Drawing image={rw5} title="Beach" description="2020" />
    <Drawing image={rw6} title="Untitled 27" description="2020" />
    <Drawing image={rw7} title="Children" description="2020" />
    <Drawing image={rw8} title="Stage" description="2020" />
    <Drawing image={rw9} title="Untitled 32" description="2020" />
    <Drawing image={rw10} title="Digger" description="2020" />
    <Drawing image={rw11} title="Children 2" description="2020" />
    <Drawing image={rw12} title="City" description="2020" />
    <Drawing image={rw13} title="Untitled 41" description="2021" />
    <Drawing image={rw14} title="Ortakarm" description="2021" />
    <Drawing image={rw15} title="Untitled 42" description="2021" />
    <Drawing image={rw16} title="Modern" description="2020" />
    <Drawing image={rw17} title="Untitled 47" description="2021" />
    <Drawing image={rw18} title="Monarch" description="2021" />
    <Drawing image={rw19} title="Alchemist" description="2021" />
    <Drawing image={rw20} title="General" description="2021" />
    <Drawing image={rw21} title="Jazz 52" description="2020" />

    <Contact />
  </Layout>
)

export default IndexPage

// Components

function Drawing(props) {
  return (
    <div className="drawingPost">
      <div className="holdImage">
        {props.image ? <img src={props.image} alt={props.title} /> : null}
      </div>
      <div className="holdDescription">
        <p>{props.title} <br /> <small>{props.description}</small></p>
      </div>
    </div>
  )
}


function Contact(props) {
  return (
    <div className="contact">
      <p>
        Let's talk. Get in touch:
        <br />{" "}
        <a href="mailto:by72mena@gmail.com" rel="noopener noreferrer">
          Email
        </a>{" "}
        -{" "}
        <a
          href="https://www.threads.net/@72mena"
          target="_blank"
          rel="noopener noreferrer"
        >
          Threads
        </a>{" "}
        -{" "}
        <a
          href="https://www.linkedin.com/in/jlfloresmena/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  )
}

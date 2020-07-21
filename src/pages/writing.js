import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Assets - Writing
import uxsettings from "../images/notepad/uxsettings.jpg";
import keyboard from "../images/notepad/keyboard.jpg";
import unlocking from "../images/notepad/unlocking.jpg";
import layered from "../images/notepad/layered.jpg";
import numbers from "../images/notepad/numbers.jpg"

//Assets - Work
import svgAnim from "../images/work/svgAnim.png";
import sequence from "../images/work/sequenceGame.jpg";
import lottie from "../images/work/lottie.jpg"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="intro-description writing">
      <h5>WRITING</h5>
      <p>I like to share what I learn.</p>
      <p>Writing helps me improve my focus and thinking. English is not my first language, so this exercise is a worthwhile multi-layered challenge to me.
      </p>
    </div>

    <Post
      image={numbers}
      type="Article"
      title="A Change in Motion"
      link="a-change-in-motion"
    />

    <Post
      image={uxsettings}
      type="Analysis"
      title="The UX of Mobile Settings"
      link="the-ux-of-mobile-settings"
    />

    <Post
      image={keyboard}
      type="Analysis"
      title="Android and iOS Keyboard Experiences"
      link="mobile-keyboard-experiences"
    />

    <Post
      image={unlocking}
      type="Article"
      title="Unlocking Ideas"
      link="unlocking-ideas"
    />

    <Post
      image={layered}
      type="Article"
      title="From A to B and Back Again"
      link="from-a-to-b-and-back-again"
    />

    <Post
      image={lottie}
      type="Github Repo & Prototype"
      title="Module: Lottie for Framer"
      link="lottie-for-framer"
    />

    <Post
      image={layered}
      type="Github Repo & Prototype"
      title="Module: Sticky Headers for Framer"
      link="sticky-headers"
    />

    <PostOutside
      image={svgAnim}
      type="Codepen Demo"
      title="SVG Animation: Google I/O16 countdown"
      linkTo="http://codepen.io/72mena/pen/dMqbZp"
    />

    <PostOutside
      image={sequence}
      type="Minigame"
      title="Sequence Minigame"
      linkTo="http://setentaydos.com/sequence/"
    />

    <Contact />
  </Layout>
)

export default IndexPage


// Components

function LeftPanel(props){
  return (
    <div>
      <div className="sectionPanel">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  )
}

function Post(props){
  return (
    <Link to={props.link} className="post">
      <div>
        {props.image ? <img src={props.image} alt={props.label} /> : null}
      </div>
      <div>
        <small
          style={{
            opacity: 0.75,
          }}
        >
          {props.type}
        </small>
        <h2>{props.title}</h2>
        <p>Read more →</p>
      </div>
    </Link>
  )
}

function PostOutside(props) {
  return (
    <div>
      <a href={props.linkTo} target="_blank" rel="noopener noreferrer" className="post">
        <div>
          {props.image ? <img src={props.image} alt={props.label} /> : null}
        </div>
				<div>
          <small
            style={{
              opacity: 0.75,
            }}
          >
            {props.type}
          </small>
          <h2>{props.title}</h2>
          <p>Go to Demo →</p>
        </div>
      </a>
    </div>
  )
}

function Contact(props){
  return (
    <div className="contact">
      <p>
        Let's talk. Get in touch:
        <br /> <a href="mailto:by72mena@gmail.com" rel="noopener noreferrer">Email</a> -{" "}
        <a href="https://twitter.com/72mena" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{" "}
        -{" "}
        <a href="https://www.linkedin.com/in/jlfloresmena/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </div>
  )
}
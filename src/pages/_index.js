import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Assets
import avatar72 from "../images/72avatar.png";
import avatar72complete from "../images/72completeavatar.png";

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

    <IntroductionUpdate />

    <a name="work"></a>
    <LeftPanel title="Work">
      <p>
        I believe in portfolios, but I don't share Disney related work online.
      </p>
      <p>
        This is a list of experiments I’ve done to either explore solutions on
        Disney projects, or to provide assets and modules to the mobile apps
        prototyping community.
      </p>
    </LeftPanel>

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


    <a name="writing" />
    <LeftPanel title="Writing">
      <p>I like to share what I learn.</p>
      <p>
        Writing helps me improve my focus and thinking. English is not my first
        language, so this exercise is a worthwhile multi-layered challenge to
        me.
      </p>
    </LeftPanel>

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
      image={numbers}
      type="Article"
      title="A Change in Motion"
      link="a-change-in-motion"
    />

    <Contact />
  </Layout>
)

export default IndexPage


// Components

function Introduction(props){
  return (
    <div>
      <div className="introInfo">
        <div>
          <img src={avatar72} alt={"Avatar"} />
        </div>
        <div className="mainDescription">
          <h2>
            Juan Flores Mena
          </h2>
          <h3>
            Interaction & Experience Designer
          </h3>
        </div>
      </div>
      <p className="summary">
        At Disney Parks & Resorts I’ve focused on prototype-driven design exploration of mobile apps.
      </p>
      <div className="detailedInfo">
        <p>The output of my work helps teams tell a story to obtain senior leadership buy-in, get a budget approved, align groups across the org, and conduct user testings.</p>
        <p>For example, I worked with Disney for four years, leading exploration efforts of near-future and speculative features for their Parks & Resorts mobile apps.</p>
        <p>I hold a bachelor's degree in Design by the UANL (México) and a certificate in Human-Computer Interaction by the MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL).</p>
      </div>
    </div>
  )
}

function IntroductionUpdate(props){
  return (
    <div>
      <div className="introInfo">
        <div>
          <img src={avatar72complete} alt={"Avatar"} />
        </div>
        <div className="mainDescription">
          <h2>
            Juan Flores Mena
          </h2>
          <h3>
            Interaction & Experience Designer
          </h3>
        </div>
      </div>
      <p className="summary">
      I'm a Seattle-based designer and strategy consultant from México. I'm focused on ideation through prototype-driven design.
      </p>
    </div>
  )
}


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
      <a href={props.linkTo} target="_blank" className="post">
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
        <br /> <a href="mailto:by72mena@gmail.com">Email</a> -{" "}
        <a href="https://twitter.com/72mena" target="_blank">
          Twitter
        </a>{" "}
        -{" "}
        <a href="https://www.linkedin.com/in/jlfloresmena/" target="_blank">
          LinkedIn
        </a>
      </p>
    </div>
  )
}
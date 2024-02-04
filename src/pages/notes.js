import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Subscribe } from '../components/articlesLayout'

//Assets - Writing
import uxsettings from "../images/notepad/uxsettings.jpg"
import keyboard from "../images/notepad/keyboard.jpg"
import unlocking from "../images/notepad/unlocking.jpg"
import layered from "../images/notepad/layered.jpg"
import numbers from "../images/notepad/numbers.jpg"
import castle from "../images/notepad/castle.jpeg"
import fff from "../images/notepad/fff__.png"
import mtgcards from "../images/notepad/mtgcards.jpg"

//Assets - Work
import svgAnim from "../images/work/svgAnim.png"
import sequence from "../images/work/sequenceGame.jpg"
import lottie from "../images/work/lottie.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

	<Subscribe />

	<PostOutside
      type="Article"
      title="Thinking in bullet points"
      linkTo="https://72mena.substack.com/p/thinking-in-bullet-points"
      linkLabel="Read more →"
    />

	<PostOutside
      type="Article"
      title="Unlocking ideas"
      linkTo="https://72mena.substack.com/p/unlocking-ideas"
      linkLabel="Read more →"
    />

    <PostOutside
      image={mtgcards}
      type="Medium article"
      title="Training a machine learning model to recognize Magic: The Gathering cards"
      linkTo="https://uxdesign.cc/training-a-machine-learning-model-to-recognize-magic-the-gathering-cards-2708c1525926"
      linkLabel="Read more →"
    />
    
    <PostOutside
      image={castle}
      type="Medium article"
      title="What I learned about prototyping after four years at Disney"
      linkTo="https://uxdesign.cc/what-i-learned-about-prototyping-after-four-years-at-disney-5bfe1fa6a3ac"
      linkLabel="Read more →"
    />

    {/* <PostOutside
      image={fff}
      type="Newsletter"
      title="FFFUTURES – Notes on speculative futures and extended realities"
      linkTo="https://fffutures.substack.com/"
      linkLabel="Open space →"
    /> */}

    <Post
      image={numbers}
      type="Article"
      title="A Change in Motion"
      link="/a-change-in-motion"
    />

    <Post
      image={uxsettings}
      type="Article"
      title="The UX of Mobile Settings"
      link="/the-ux-of-mobile-settings"
    />

    <Post
      image={keyboard}
      type="Article"
      title="Android and iOS Keyboard Experiences"
      link="/mobile-keyboard-experiences"
    />

    {/* <Post
      image={unlocking}
      type="Article"
      title="Unlocking Ideas"
      link="/unlocking-ideas"
    /> */}

    <Post
      image={layered}
      type="Article"
      title="From A to B and Back Again"
      link="/from-a-to-b-and-back-again"
    />

    <Post
      image={lottie}
      type="Github Repo & Prototype"
      title="Module: Lottie for Framer"
      link="/lottie-for-framer"
    />

    <Post
      image={layered}
      type="Github Repo & Prototype"
      title="Module: Sticky Headers for Framer"
      link="/sticky-headers"
    />

    <PostOutside
      image={svgAnim}
      type="Codepen Demo"
      title="SVG Animation: Google I/O16 countdown"
      linkTo="http://codepen.io/72mena/pen/dMqbZp"
      linkLabel="Go to Demo →"
    />

    <Contact />
  </Layout>
)

export default IndexPage

// Components

// Backup component
// function Post(props) {
// 	return (
// 	  <Link to={props.link} className="post">
// 		<div>
// 		  {props.image ? <img src={props.image} alt={props.label} /> : null}
// 		</div>
// 		<div>
// 		  <small
// 			style={{
// 			  opacity: 0.75,
// 			}}
// 		  >
// 			{props.type}
// 		  </small>
// 		  <h2>{props.title}</h2>
// 		  <p>Read more →</p>
// 		</div>
// 	  </Link>
// 	)
//   }
// function PostOutside(props) {
// 	return (
// 	  <div>
// 		<a
// 		  href={props.linkTo}
// 		  target="_blank"
// 		  rel="noopener noreferrer"
// 		  className="post"
// 		>
// 		  <div>
// 			{props.image ? <img src={props.image} alt={props.label} /> : null}
// 		  </div>
// 		  <div>
// 			<small
// 			  style={{
// 				opacity: 0.75,
// 			  }}
// 			>
// 			  {props.type}
// 			</small>
// 			<h2>{props.title}</h2>
// 			<p>{props.linkLabel}</p>
// 		  </div>
// 		</a>
// 	  </div>
// 	)
//   }


function Post(props) {
  return (
    <Link to={props.link} className="post">
      {/* <div>
        {props.image ? <img src={props.image} alt={props.label} /> : null}
      </div> */}
      <div>
        <small
          style={{
            opacity: 0.75,
          }}
        >
          {props.type}
        </small>
        <h2>{props.title}</h2>
      </div>
    </Link>
  )
}

function PostOutside(props) {
  return (
    <div>
      <a
        href={props.linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="post"
      >
        {/* <div>
          {props.image ? <img src={props.image} alt={props.label} /> : null}
        </div> */}
        <div>
          <small
            style={{
              opacity: 0.75,
            }}
          >
            {props.type}
          </small>
          <h2>{props.title}</h2>
          {/* <p>{props.linkLabel}</p> */}
        </div>
      </a>
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

import React from 'react'
import { Link } from "gatsby"

import SEO from "../components/seo"

import { Author, Spacer } from '../components/articlesLayout'

import Header from "../components/header"

//Assets
import lottieDemo from "../images/post-assets/lottie/lottie-demo.jpg"
import space from "../images/projects/dkheader.png"


const CaseLottieForFramer = () => (
  <>

  <Header />


  <SEO title="Project: Digital Key" />

  <ProjectTitle
    title="Digital Key"
  />

  <MidColumn>
    <p>
    Digital Key allows Guests staying at Disney Resorts to skip the front desk and unlock their room & common area doors (ie. fitness centers, club level lounges).
    </p>
    <h2>
      Here's the official announcement
    </h2>
  </MidColumn>




  <div className="video-container">
    <iframe title="Video-Container" className="video" src="https://www.youtube-nocookie.com/embed/pv3TrttXOh8" frameborder="0" allowfullscreen></iframe>
  </div>


  <MidColumn maxWidth="500px">
    <h2>Design Problem</h2>
    <p>
      I started working on this project when I had to tackle a very specific
      set of questions for Disney:
    </p>
    <ul>
      <li>
        How can I help bring animations to the app in a way it's efficient and
        performant?
      </li>
      <li>
        Videos increase the app size too much. Gifs tradeoff quality. How can
        I both increase the quality of animations and help reduce the size of
        the app?
      </li>
      <li>
        <b>
          Can I come up with a process that is both effective and accessible
          for everyone in our team?
        </b>
      </li>
    </ul>
    <h2>My Solution</h2>
    <p>
      While I was researching different mobile animation techniques, AirBnB
      was testing their Lottie framework. I learned about <b>Bodymovin</b>{" "}
      before learning about Lottie.{" "}
    </p>
    <p>
      I started to explore SVG Animations, Bodymovin, and Lottie. I knew I had
      finally hit a homerun when I managed to port the Lottie API to Framer.
    </p>
    <p>
      I reached out to the creator of Bodymovin, and to the lead developer of
      Lottie, to ask if they were OK if I made my port open source. They said
      yes.
    </p>
  </MidColumn>

  <div className="midImage">
    <img src={space} alt={"Space"} />
  </div>

    

    <div>
      <div style={{ textAlign: "center" }}>
        <img
          src={lottieDemo}
          alt={"Lottie Demo"}
          style={{ maxHeight: "750px" }}
        />
        <p>
          <b>
            Check the{" "}
            <a
              href="https://github.com/72/lottie-framer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>{" "}
            and the{" "}
            <a
              href="https://framer.cloud/lZjXF/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prototype Demo
            </a>
          </b>
        </p>
      </div>
    </div>

    <Spacer />

    <div style={{ maxWidth: "550px" }}>
      <h2>"But what is it solving for again?"</h2>
      <p>
        Great question. I really like talking about this project, and if you're
        interested in a deep dive,{" "}
        <Link to={"a-change-in-motion"}>check out this article</Link> I wrote
        about it.
      </p>
      <p>
        {" "}
        In a nutshell, the reason why I'm proud of this project is not just that
        you can have fancy animations on your project, but this is hands-down
        the{" "}
        <b>
          simplest way to bring to your prototypes the real animation files
        </b>{" "}
        that will end up in the app.
      </p>
      <p>To illustrate the idea, let's take a look at the following example:</p>
    </div>

    <Spacer />

    <Author />
  </>
)

export default CaseLottieForFramer



function ProjectTitle(props) {
  return(
    <div className="postTitle">
      <h1 className="project-title">{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}

function MidColumn(props){
  return(
    <div style={{ width: "100%", maxWidth: props.maxWidth, margin: "0 auto 40px" }}>
      {props.children}
    </div>
  )
}

MidColumn.defaultProps = {
  maxWidth: "650px",
}
import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PostTitle, Author, MidColumn, Spacer } from '../components/articlesLayout'


//Assets
import lottieDemo from "../images/post-assets/lottie/lottie-demo.jpg"
import lottieCode1 from "../images/post-assets/lottie/lottieCode1.jpg"
import lottieCode2 from "../images/post-assets/lottie/lottieCode2.jpg"
import lottieCode3 from "../images/post-assets/lottie/lottieCode3.jpg"
import svgAnimExample from "../images/post-assets/lottie/svgAnimExample.png"

const CaseLottieForFramer = () => (
  <Layout>
    <SEO title="Module: Lottie for Framer" />

    <PostTitle
      title="Module: Lottie for Framer"
      subtitle="A module that brings AirBnb's Lottie framework into Framer"
    />

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

    <div className="midImage">
      <img src={svgAnimExample} alt={"SVG Animation"} />
    </div>

    <MidColumn>
      <p>
        <small>
          This is random project I found on CodePen (credit to Chris Gannon).
        </small>
      </p>
      <p>
        What you're seeing here, is the typical way of working with SVG
        Animations.
      </p>
      <p>
        It's a very simple animation, with a quite robust and complex setup
        running behind it.
      </p>
      <p>
        <ul>
          <li>Three files are needed: HTML, CSS, Javascript.</li>
          <li>
            There's a bunch of code to handle across three different programming
            languages.
          </li>
          <li>
            And it's not just your everyday HTML, CSS and JS. There's a very
            specific type of knowledge required to handle SVGs Animations.
          </li>
        </ul>
      </p>
    </MidColumn>

    <Spacer />

    <MidColumn>
      <div>
        <h2>Let's take a look now at my module in action:</h2>
      </div>
      <img
        className="fitImage"
        src={lottieCode1}
        alt="Example of Lottie for Framer"
      />
      <h2>That's it!</h2>
      <p>
        The module handles the setup of Lottie behind the scenes. You just need
        to have your Lottie file (the json file) and you're good to go.
      </p>
      <p>
        This is also giving you a "Framer-flavored" Layer, which is one the
        simplest implementations of Lottie out there. I'd say it's even simpler
        than the ones I've seen in Framer X.
      </p>
    </MidColumn>

    <Spacer />

    <div className="comparisonColumns" style={{ textAlign: "left" }}>
      <div>
        <img
          className="fitImage"
          src={lottieCode2}
          alt="Example of Lottie for Framer"
        />
      </div>
      <div>
        <h3>Additional attributes</h3>
        <p>
          The API is very intuitive. Each attribute is self-explanatory, but I
          documented each one on the Github Repo to make sure it was clear and
          accessible to anyone.
        </p>
      </div>
    </div>

    <Spacer />

    <div className="comparisonColumns" style={{ textAlign: "left" }}>
      <div>
        <img
          className="fitImage"
          src={lottieCode3}
          alt="Example of Lottie for Framer"
        />
      </div>
      <div>
        <h3>Framer flavored</h3>
        <p>
          I wanted this module to have a great integration with Framer. People
          who are used to work with it will notice that any "LottieLayer" has
          access to all the goodies you get on any other Framer layer.
        </p>
        <p>
          For example,{" "}
          <b>
            you can enable robust interactions like onDrag, onTap, onDoubleTap,
            onSwipeLeft, etc. on any of your Lottie animations.
          </b>
        </p>
      </div>
    </div>

    <Spacer />

    <MidColumn>
      <p>
        At Disney, this module opened the doors to new micro-interactions and
        new delightful experiences on the Parks apps, and it even helped set a
        productive iterative design process on a new app.
      </p>
      <p>
        I want to reiterate that this was not just about animations. My goal was
        to make sure I could bring our team the simplest and most accessible
        solution, specially for those who were not too into code, and who
        wouldn't have explored SVG Animations other way.
      </p>
      <p>
        Make sure to read a deep dive on my article:{" "}
        <Link to={"a-change-in-motion"}>A Change in Motion</Link>
      </p>
    </MidColumn>

    <Spacer />

    <Author />
  </Layout>
)

export default CaseLottieForFramer
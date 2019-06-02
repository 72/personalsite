import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LabPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        textAlign: "left",
      }}
    >
      <h1
        style={{
          margin: "60px 0",
        }}
      >
        Lab
      </h1>
      <h3 className="lightText">
        I enjoy learning new things and sharing what I learn.
      </h3>
      <p>
        Right now I'm diving into Gatsby, GraphQL, and Flutter. <br />
        Here's a list of experiments I've worked on:
      </p>
      <LabLink
        link="https://github.com/72/lottie-framer"
        type="Github Repo"
        label="Module: Lottie for Framer"
      />
      <LabLink
        link="https://github.com/72/StickyHeaders-for-Framer"
        type="Github Repo"
        label="Module: StickyHeaders for Framer"
      />
      <LabLink
        link="https://github.com/72/GridComponent-for-Framer"
        type="Github Repo"
        label="Module: Grid Component"
      />
      <LabLink
        link="http://codepen.io/72mena/pen/dMqbZp"
        type="Codepen Demo"
        label="SVG Animation: Google I/O 16 countdown @ CodePen"
      />
      <LabLink
        link="http://setentaydos.com/sequence/"
        type="JS Minigame"
        label="I made a mini game with CoffeeScript and JavaScript..."
      />
      <LabLink
        link="https://github.com/72/Sequence-Game-for-Framer/blob/master/SequenceBoard.coffee"
        type="Github Repo"
        label="...and gave the code away"
      />
      <LabLink
        link="https://github.com/72/Learning-Flutter"
        type="Github Repo"
        label="Learning Flutter: Public repo of my tests with Dart and Flutter"
      />
    </div>
  </Layout>
)

export default LabPage


function LabLink(props) {
  return <div style={{
    margin: "60px 0",
  }}>
    <small style={{
      opacity: 0.5,
    }}>
      {props.type}
    </small>
    <p>
      <a href={props.link} target="_blank">
        {props.label}
      </a>
    </p>
  </div>;
}




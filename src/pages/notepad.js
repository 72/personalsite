import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Assets
import uxsettings from "../images/notepad/uxsettings.jpg";
import keyboard from "../images/notepad/keyboard.jpg";
import unlocking from "../images/notepad/unlocking.jpg";
import layered from "../images/notepad/layered.jpg";
import numbers from "../images/notepad/numbers.jpg"

//Assets
import figma from "../images/tools/figma.png";
import framer from "../images/tools/framer.png"
import principle from "../images/tools/principle.png"
import flutter from "../images/tools/flutter.png"
import penpaper from "../images/tools/penpaper.png"

const NotepadPage = () => (
  <Layout>
    <SEO title="Notepad" />
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
        Notepad
      </h1>
      <h3 className="lightText">
        I believe writing helps me improve my focus and thinking.
      </h3>
      <p>
        English is not my first language, so this exercise is a worthwhile
        multi-layered challenge to me.
      </p>
      <div className="gridNotes">
        <NotepadLink
          type="Article"
          label="The UX of Mobile Settings"
          image={uxsettings}
          link="https://web.archive.org/web/20160610202642/http://setentaydos.com/the-ux-of-mobile-settings/"
        />
        <NotepadLink
          type="Article"
          label="Android & iOS Keyboard Experiences"
          image={keyboard}
          link="https://web.archive.org/web/20161104102728/http://setentaydos.com/android-ios-keyboard-experiences/"
        />
        <NotepadLink
          type="Medium Article"
          label="Unlocking ideas with Framer Studio"
          image={unlocking}
          link="https://medium.com/@72mena/unlocking-ideas-with-framer-studio-790b5e9c249f"
        />
        <NotepadLink
          type="Medium Article"
          label="From A to B and back again"
          image={layered}
          link="https://blog.framer.com/from-a-to-b-and-back-again-196ffd26ec48"
        />
        <NotepadLink
          type="Medium Article"
          label="A change in motion"
          image={numbers}
          link="https://medium.com/@72mena/a-change-in-motion-162a2372d75e"
        />
      </div>
    </div>
    <h3
      style={{
        margin: "60px 0 20px",
      }}
    >
      Design Tools
    </h3>
    <h5 className="lightText">
      I'm currently hacking with:
    </h5>
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
  </Layout>
)

export default NotepadPage


function NotepadLink(props) {
  console.log(props.image)
  return (
    <a className="noteCard" href={props.link} target="_blank">
      { props.image ? (<img src={props.image} alt={props.label} />) : null }
      <div>
        <small
          style={{
            opacity: 0.75,
          }}
        >
          {props.type}
        </small>
        <p>{props.label} →</p>
      </div>
    </a>
  )
}


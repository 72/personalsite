import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotepadPage = () => (
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
        Notepad
      </h1>
      <h3 className="lightText">
        I believe writing helps me improve my focus and thinking.
      </h3>
      <p>
        English is not my first language, so this exercise is a worthwhile multi-layered challenge to me.
      </p>
      <div className="gridNotes">
        <NotepadLink
          link="https://web.archive.org/web/20160610202642/http://setentaydos.com/the-ux-of-mobile-settings/"
          type="Article"
          label="The UX of Mobile Settings"
        />
        <NotepadLink
          link="https://web.archive.org/web/20161104102728/http://setentaydos.com/android-ios-keyboard-experiences/"
          type="Article"
          label="Android & iOS Keyboard Experiences"
        />
        <NotepadLink
          link="https://medium.com/@72mena/unlocking-ideas-with-framer-studio-790b5e9c249f"
          type="Medium Article"
          label="Unlocking ideas with Framer Studio"
        />
        <NotepadLink
          link="https://blog.framer.com/from-a-to-b-and-back-again-196ffd26ec48"
          type="Medium Article"
          label="From A to B and back again"
        />
        <NotepadLink
          link="https://medium.com/@72mena/a-change-in-motion-162a2372d75e"
          type="Medium Article"
          label="A change in motion"
        />
      </div>
    </div>
  </Layout>
)

export default NotepadPage


function NotepadLink(props) {
  return <div className="noteCard">
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




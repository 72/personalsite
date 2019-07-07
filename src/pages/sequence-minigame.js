import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PostTitle, Author, MidColumn, Spacer } from '../components/articlesLayout'


//Assets
// import layoutAndroid from "../images/post-assets/keyboard-experiences/layoutAndroid.png"


const CaseSequence = () => (
  <Layout>
    <SEO title="Sequence" />

    <PostTitle
      title="Sequence"
      subtitle="A mini game made with CoffeeScript, JS, and Firebase"
    />

    <MidColumn maxWidth="500px">
      <h2>Objective</h2>
      <p>Info</p>
      <h2>My Solution</h2>
      <p>Info</p>
    </MidColumn>

    <Spacer />

    <Author />
  </Layout>
)

export default CaseSequence
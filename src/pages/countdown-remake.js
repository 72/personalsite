import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PostTitle, Author, MidColumn, Spacer } from '../components/articlesLayout'


//Assets
// import layoutAndroid from "../images/post-assets/keyboard-experiences/layoutAndroid.png"


const CaseCountdownRemake = () => (
  <Layout>
    <SEO title="SVG Animation Remake" />

    <PostTitle
      title="SVG Animation Remake"
      subtitle="A remake of Google IO countdown"
    />

    <MidColumn maxWidth="500px">
      <h2>Design Problem</h2>
      <p>Info</p>
      <h2>My Solution</h2>
      <p>Info</p>
    </MidColumn>

    <Spacer />

    <Author />
  </Layout>
)

export default CaseCountdownRemake



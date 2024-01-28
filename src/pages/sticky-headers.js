import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PostTitle, Author, MidColumn, Spacer, Subscribe } from '../components/articlesLayout'


//Assets
import shdemo1 from "../images/post-assets/sticky-headers/shdemo1.png"
import shdemo2 from "../images/post-assets/sticky-headers/shdemo2.png"
import state1device from "../images/post-assets/sticky-headers/state1-device.jpg"
import state2device from "../images/post-assets/sticky-headers/state2-device.jpg"
import state1perspective from "../images/post-assets/sticky-headers/state1-perspective.jpg"
import state2perspective from "../images/post-assets/sticky-headers/state2-perspective.jpg"
import origamiProject from "../images/post-assets/sticky-headers/origami-project.jpg"
import scrollRangeCode from "../images/post-assets/sticky-headers/scrollRangeCode.jpg"



const CaseStickyHeaders = () => (
  <Layout>
    <SEO title="Module: Sticky Headers" />

    <PostTitle
      title="Module: Sticky Headers"
      subtitle="A module to handle sticky headers within scroll components in Framer"
    />

    <Author />

    <MidColumn maxWidth="500px">
      <h2>Design Problem</h2>
      <p>
        Generally speaking, designing and prototyping scrolling behaviors is a
        challenge, and “sticky headers” are particularly tricky.
      </p>
      <p>
        Even though some tools offer a way to prototype sticky elements, most
        interaction designers struggle going beyond the limited features offered
        by their tools.
      </p>
      <p>
        Not being able to put this interaction together hinders the designer’s
        capability to visualize, test, and iterate on the desired experience of
        this interaction.
      </p>
      <h2>My Solution</h2>
      <p>
        In order to extend the basic functionality of scrolling behaviors, I
        designed and published a module based on FramerJS that let’s designers
        and prototypers quickly setup a scrolling behavior that handles multiple
        sticky headers.
      </p>
      <p>
        <b>
          <a
            href="https://github.com/72/StickyHeaders-for-Framer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check the Github Repo
          </a>
        </b>
      </p>
      <p>Here are two prototypes to demo the module:</p>
    </MidColumn>

    <div className="comparisonColumns">
      <div>
        <img src={shdemo1} alt={"Sticky Header Demo 1"} />
        <h3>
          <a
            href="https://framer.cloud/peGYM/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo 1
          </a>
        </h3>
      </div>
      <div>
        <img src={shdemo2} alt={"Sticky Header Demo 2"} />
        <h3>
          <a
            href="https://framer.cloud/bgIIg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo 2
          </a>
        </h3>
      </div>
    </div>

    <Spacer />

    <div style={{ maxWidth: "550px" }}>
      <h2>Advanced Scrolling Behaviors</h2>
      <p>
        Taking this module to the next level, I looked for ways to combine
        multiple outcomes from one single scrolling interaction. An example of
        this is how Safari handles scrolling on mobile. I wanted to replicate
        the multiple behaviors affected by scrolling through a website's
        content, which in the following example you'll notice these elements
        are: the browser UI, the "suggested app" banner and the website's top
        nav menu.
      </p>
    </div>

    <Spacer />

    <div className="midImage">
      <img src={origamiProject} alt={"Origami Project"} />
      <MidColumn maxWidth="500px">
        <p>
          I like to do my research on how other tools would solve specific
          design challenges. In some cases, some tools fall short of managing a
          real solution. But in this case I found a great example made in
          Origami Studio by Geaorge Otsubo. In the image above you can see how
          the different nodes are connected to provide the expected result. The
          project is quite complex, but it works.
        </p>
      </MidColumn>
      <Spacer />
      <MidColumn maxWidth="500px">
        <p>
          I managed to bring the solution to Framer, and hide all the complexity
          in a Class, so this could be easily brought into a project by anyone
          and implemented through a simpler interface.
        </p>
      </MidColumn>
    </div>

    <MidColumn maxWidth="550px">
      <img src={scrollRangeCode} alt={"Scroll Range Code"} />
    </MidColumn>

    <Spacer />

    <div style={{ maxWidth: "550px" }}>
      <h2>From A to B</h2>
      <p>
        I wrote an article that details the thinking behind this solution, and
        it got picked by the Framer team for{" "}
        <a href="https://blog.framer.com/from-a-to-b-and-back-again-196ffd26ec48">
          their Medium blog
        </a>
        .{" "}
      </p>
      <p>
        The next images show the State A (default state) of a website viewed on
        Safari, and the State B (scrolled state). Next to them are a special
        layered perspective view to demostrate how all the elements are stacked.
      </p>
    </div>

    <Spacer />

    <div className="perspectiveSection">
      <div>
        <img src={state1device} alt={"Scrolled State 1"} />
      </div>
      <div>
        <img src={state1perspective} alt={"Scrolled State Perspective 1"} />
      </div>
    </div>

    <Spacer />

    <div className="perspectiveSection">
      <div>
        <img src={state2device} alt={"Scrolled State 2"} />
      </div>
      <div>
        <img src={state2perspective} alt={"Scrolled State Perspective 2"} />
      </div>
    </div>

    <Spacer />

    <div>
      <p>
        Make sure to{" "}
        <b>
          <a
            href="https://gfycat.com/abandoneddearestcapybara-interaction-design-framer"
            target="_blank"
            rel="noopener noreferrer"
          >
            check the video
          </a>
        </b>{" "}
        of the perspective view, and{" "}
        <b>
          <a
            href="http://share.framerjs.com/g0igbcuwvagq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the prototype
          </a>
        </b>
        .
      </p>
    </div>

    <Spacer />
	<Subscribe />
  </Layout>
)

export default CaseStickyHeaders



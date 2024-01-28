import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PostTitle, Author, MidColumn, Spacer, Subscribe } from '../components/articlesLayout'


//Assets
// import layoutAndroid from "../images/post-assets/keyboard-experiences/layoutAndroid.png"


const ArticleUnlockingIdeas = () => (
  <Layout>
    <SEO title="Unlocking Ideas" />

    <PostTitle
      title="Unlocking Ideas"
      subtitle="Notes on the role of exploration in Prototyping and Interaction Design"
    />

    <Author />

    <MidColumn>
      <h2>On observation & exploration</h2>
      <p>Deep observation improves prototyping, and vice versa.</p>
      <p>
        Picture a guitarist composing a new song. His eyes are closed while his
        mind is exploring different rhythms and melodies through the skill of
        his fingers. His hands dance between previously learned chords, a hard
        earned technique that improved his capacity to unlock new ideas.
      </p>
      <p>
        At the same time, there’s people creating music with the help of
        software, without ever needing to touch a real musical instrument in the
        process.
      </p>
    </MidColumn>

    <Spacer />

    <MidColumn maxWidth="750px">
      <p>
        There’s something similar going on with designers right now: In order to
        explore ideas for new interactions, the “chords” to learn are made of
        variables, methods and functions: programming languages.
      </p>
      <p>
        Obviously, one doesn’t need to learn to code in order to prototype
        ideas. Specially when there are a lot of options out there using “no
        coding required” as their selling point. But just as the guitarist is
        able to experience the flow of ideas being leveraged by his mind through
        his hands, a designer can scrutinize the feasibility and practicability
        of interactions and navigation flows through code.
      </p>
      <p>
        Debates of “should designers learn to code?” are a waste of time. Let’s
        just be clear on this: an intermediate level of javascript will lead you
        nowhere as a programmer, but it will greatly expand your skills and
        opportunities as a designer.
      </p>
      <p>
        The key thing here is being able to observe the flow of ideas taking
        shape. If learning code helps, then great. If having pen & paper is
        enough for you, that’s OK. But take a moment to close your eyes and
        experience what’s going on in your head, some of the best solutions
        might end up buried for relying too much on apps that do all the
        (limited) thinking for you.
      </p>
    </MidColumn>

    <Spacer />

    <MidColumn>
      <p>
        I’ve worked in projects in which Axure or InVision were more than
        enough: great tools to communicate an idea. But honestly, there’s stuff
        that needs to be carefully explained as part of the sales pitch, like
        <i>
          “ok, let’s imagine that in the final build this button is going to be
          animated from here to here, and the background will change at the
          exact same time” or “this scrolls the whole content because it’s just
          a prototype, but let’s just say for now that the timestamps will be
          sticky in the final version.”
        </i>
      </p>
      <p>
        That’s acceptable, but sometimes we are demanding too much from our
        partners/stakeholders and they might not picture the same thing we have
        in mind; hence the discussion falls short without anyone noticing it.
      </p>
      <p>
        That’s why I‘m constantly looking for more options, and yes, Framer
        Studio offers some real power!
      </p>
      <p>
        When we talk about high-fidelity prototypes, usually we mean it just as
        “high-fidelity UI”, but Interaction Design keeps evolving, and it’s time
        to stop cheapening the “high-fidelity prototype” term, as it should now
        englobe the triad of UI, motion and interactions, for the sake of
        bringing better discussions between designers and developers, to raise
        the bar in our industry, and to keep unlocking new ideas.
      </p>
    </MidColumn>


    <Spacer />
	<Subscribe />
  </Layout>
)

export default ArticleUnlockingIdeas



import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PostTitle, Author, GridType2, MidColumn, Spacer, Subscribe } from '../components/articlesLayout'

//Assets
import numbers from "../images/post-assets/change-in-motion/numbers.jpeg"
import iconsvg from "../images/post-assets/change-in-motion/iconsvg.jpeg"
import iconjson from "../images/post-assets/change-in-motion/iconjson.jpeg"
import numberloop from "../images/post-assets/change-in-motion/numberloop.gif"
import svgcode from "../images/post-assets/change-in-motion/svgCode.jpeg"
import aejson from "../images/post-assets/change-in-motion/aejson.jpeg"
import lottie from "../images/post-assets/change-in-motion/lottie.jpeg"
import aejsonlottie from "../images/post-assets/change-in-motion/aejsonlottielogos.jpeg"
import framerLogo from "../images/post-assets/change-in-motion/framerLogo.jpeg"
import codeA from "../images/post-assets/change-in-motion/codeA.png"
import codeB from "../images/post-assets/change-in-motion/codeB.png"
import animationLoop from "../images/post-assets/change-in-motion/animationLoop.gif"

// import * as codePen from "../components/ei"

const ArticleChangeInMotion = () => (
  <Layout>
    <SEO title="A Change in Motion" />

    <PostTitle
      title="A Change in Motion"
      subtitle="Working with vector-based animations"
    />

    <Author />

    <div className="midImage">
      <img src={numbers} alt={"Numbers used in Google IO 2016 countdown"} />
    </div>

    <div className="gridSection">
      <div>
        <p className="sideNote">
          This analysis was picked and published by the Framer team on their{" "}
          <a
            href="https://blog.framer.com/a-change-in-motion-162a2372d75e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium blog
          </a>{" "}
          back in 2017. This is a revised version.
        </p>
      </div>
      <div />
      <div>
        <p>
          I have always advocated for using code as a tool for design
          exploration.
        </p>
        <p>
          But at the same time, whenever I’m in a team that’s trying to adopt
          code in their design process, I identify the designers that are not on
          board with it. Not all of them speak it out loud for fear of being
          judged, but I try to stand up for them and their right to not use
          code.
        </p>
        <p>
          This may sound contradictory — as I don’t share their point of
          view — but it’s important to respect their choice and to understand
          where they’re coming from. A good alternative is to help them improve
          their design process in a different way.
        </p>
        <p>
          This article is about that: a case in which code may actually limit
          designers instead of empowering them. And an alternative that I
          consider will become a game changer.
        </p>
        <p>This is about working with SVG Animations.</p>
      </div>
      <div />
    </div>

    <Spacer />

    <MidColumn>
      <h2>Why SVGs?</h2>
      <img src={iconsvg} alt="SVG file icon" />
      <p>
        SVGs are crucial. If you’re working on an app and want to include
        complex animations, you can’t just throw a bunch of animated gifs and
        videos if you want to have a lightweight application.
      </p>
      <p>
        And SVGs are super lightweight. You don’t have to worry about assets for
        different resolution screens, the vector data scales extremely well. And
        on top of that you can animate them — through a painful process, but you
        can do it.
      </p>
    </MidColumn>

    <Spacer />

    <GridType2 header={"SVG Animations"}>
      <p>
        <i>A brief summary of my personal experience learning about SVGs.</i>
      </p>

      <b>Google IO 2016</b>
      <p>
        Last year I was intrigued by Google I/O’s countdown, it was a really
        cool animation that was not a video nor a gif, but it was created with
        code. I tried to ask for a tutorial on how to make something like it.
      </p>
    </GridType2>

    <div className="comparisonColumns">
      <div>
        <img
          src={numberloop}
          alt="Loop of Number"
          style={{ height: "auto", width: "auto", minWidth: "200px" }}
        />
      </div>
      <div>
        <TwitterMedia />
      </div>
    </div>

    <Spacer />

    <MidColumn>
      <p>
        There were no responses. No luck. I knew it was an SVG Animation, but I
        just didn’t know where to start if I wanted to create something like it.
      </p>
      <p>
        So I decided to get into SVGs. I read articles and tutorials and became
        a big fan of the work created and shared by Sarah Drasner and Sara
        Soueidan. I recommend you to follow them on Twitter and read their
        articles. You will learn a lot from them.
      </p>
      <p>
        I also started to learn the caveats of this technology (like SMIL
        animations) and the common workarounds and best practices to animate
        SVGs.
      </p>
      <p>
        After learning the basics, I found GreenSock and their GSAP (GreenSock
        Animation Platform). I gave it a chance and, after some experimentation,
        I managed to put together my own Google I/O countdown.
      </p>
    </MidColumn>

    <iframe
      height="500"
      style={{ width: "100%" }}
      scrolling="no"
      title="Google I/O - Countdown 16"
      src="//codepen.io/72mena/embed/dMqbZp/?height=265&theme-id=0&default-tab=result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen{" "}
      <a href="https://codepen.io/72mena/pen/dMqbZp/">
        Google I/O - Countdown 16
      </a>{" "}
      by 72mena (<a href="https://codepen.io/72mena">@72mena</a>) on{" "}
      <a href="https://codepen.io">CodePen</a>.
    </iframe>

    <MidColumn>
      <p>
        I was happy with the result, specially considering I had to connect the
        dots by myself. But here’s my take on this experience: It was not fun.
      </p>
      <p>
        Working with code can be painful at first, there’s nothing new about
        that. I’ve had my fair share of going through learning new languages,
        and I plan on continuing doing so — it’s a very rewarding feeling when
        you finally make it work.
      </p>
      <p>
        However, working specifically with SVG Animations was different for me,
        there was not a lot of flexibility to iterate and experiment freely.
      </p>
      <p>
        The main issue I identified was that much of the techniques and
        workarounds that you learn about are either experimental (meaning, not
        supported by all browsers yet) or obsolete (deprecated by most
        browsers).
      </p>
      <p>
        And I’m aware that you could say something similar about JavaScript, and
        I do enjoy working with JavaScript. But we’re talking about coding
        animations here.
      </p>
      <p>
        Although I find SVG Animations to be very interesting, and I plan on
        continuing learning more about this field, I know I’d have a hard time
        advocating for it and bringing other designers on board. That’s what’s
        important here: finding alternatives.
      </p>
    </MidColumn>

    <Spacer />

    <MidColumn>
      <h2>A game changer: Bodymovin</h2>
      <img src={iconjson} alt="JSON file icon" />
      <p>
        As I mentioned before: if designers in the team do not want to dive
        deeply into code, I try to find alternatives to help them extend their
        set of design tools so we can empower their process in different ways.
      </p>
      <p>
        I knew it was going to be a hard sell to persuade other designers to
        work with SVG Animations. And I recently found what I consider to be a
        game changer: Bodymovin.
      </p>
      <p>
        Bodymovin is an After Effects plugin created by Hernan Torrisi. It’s a
        free plugin and you can follow the project on GitHub. (This project is
        not new, but it’s not mentioned or shared enough.)
      </p>
      <p>
        A good way to explain what this plugin does is to compare these two
        setups:
      </p>
    </MidColumn>

    <div className="comparisonColumns" style={{ textAlign: "left" }}>
      <div>
        <img
          className="fitImage"
          src={svgcode}
          alt="Illustration of SVG code"
        />
        <h3>Normal Setup of SVG Animations</h3>
        <p>
          Today’s workflow to create SVG Animations on the web is to draw the
          SVG in the DOM, and then to animate it with CSS and JS. This means
          that every animated element — and their concept of timing and
          timeline— needs to be handled with code.
        </p>
      </div>
      <div>
        <img
          className="fitImage"
          src={aejson}
          alt="Illustration of AfterEffects"
        />
        <h3>The Alternative Setup with Bodymovin</h3>
        <p>
          If we think about After Effects, we think about a tool that will let
          us export our animations as movie files or animated gifs — and as I
          mentioned earlier, ideally we shouldn’t include a bunch of these files
          in our apps.
        </p>
        <p>
          However, with Bodymovin, you can work on a vector-based animation in
          After Effects and then export it as a JSON file. This is HUGE.
        </p>
      </div>
    </div>

    <Spacer />

    <MidColumn>
      <h2>Animating for the Web and Native Apps</h2>
      <p>
        <i>A consistent result across platforms</i>
      </p>
      <img src={lottie} alt="Lottie Logo" />
      <p>
        Animating SVGs presents different challenges depending on the platform
        you want to run them on. The techniques that you learn to animate SVGs
        for the web won’t let you just jump into animating SVGs for iOS or
        Android.
      </p>
      <p>
        A common challenge in Product Design is to keep one same vision from
        Design to Development — and to have a consistent result across
        platforms. This is why when it comes to complex animations, teams will
        either simply use a video, an animated gif, or downgrade it to a
        nice-to-have in the project scope.
      </p>
      <p>
        But here Bodymovin has also made an impact. Bodymovin inspired
        Facebook’s Keyframes and AirBnb’s Lottie.
      </p>
      <p>
        Both platforms are doing great things but Lottie is a bit ahead of the
        curve here (v2 is available on Android and v1.5 on iOS as of this
        writing).
      </p>
      <img src={aejsonlottie} alt="AE JSON Lottie Logo" />
      <p>
        Lottie will let you use the same lightweight JSON file exported from
        After Effects to run your animations on Android and iOS.
      </p>
      <p>
        One animation. One JSON file. One consistent result across platforms.
      </p>
      <p>
        (If you talk about Lottie, don’t forget to mention and thank Hernan
        Torrisi for creating Bodymovin and making it available for free.)
      </p>
    </MidColumn>

    <Spacer />

    <MidColumn>
      <h2>A prototyping combo: Bodymovin + Framer</h2>
      <p>
        <i>Animations meet high-fidelity fast-prototyping</i>
      </p>
      <img src={framerLogo} alt="Framer Logo" />
      <p>
        Framer is the tool I use the most to explore new designs and
        interactions. It’s a crucial part of my workflow, and I thought it would
        be very helpful to be able to use the animations exported with Bodymovin
        in my prototypes.
      </p>
      <p>
        Just think about it: If you’re designing a mobile app, you could be
        using in your prototype the same JSON file that would be included in the
        iOS and Android builds.
      </p>
      <p>
        I created a module for this and used the same Framer flavor we all know
        and love. Just import the module, create a (bodymovin) Layer and play
        with its attributes.
      </p>
      <img src={codeA} alt="Code Example" />
      <p>
        That’s it! That’s all it takes to have a vector-based animation running
        in your prototype. And again: you’d be using the same JSON file that
        would be delivered to the development team to implement it on iOS or
        Android.
      </p>
      <p>
        If you compare this setup with the complex one you’d need to create to
        run SVG Animations you’ll understand why I consider Bodymovin to be a
        game changer. A designer can focus on using code for prototyping and
        AfterEffects for complex animations — instead of having the constraints
        of coding animations for the DOM.
      </p>
      <p>I also surfaced other attributes you get from Bodymovin:</p>
      <img src={codeB} alt="Code Example 2" />
      <ul>
        <li>
          ‘loop’ takes a boolean (true or false) or a number. ie. if you pass a
          3, it would only loop the animation 3 times.
        </li>
        <li>
          ‘speed’ is 1 by default, which is normal speed. 2 is double the speed,
          0.5 is half the speed, and so on.
        </li>
        <li>
          ‘direction’ is 1 by default, if you set it to -1 it will play the
          animation backwards.
        </li>
      </ul>
      <p>
        Each attribute is quite self-explanatory, but you can see the
        documentation in the GitHub repo. There are also methods you can use to
        control your animation, like play(), pause(), goToAndStop(), etc.
      </p>
      <h3>
        <a
          href="https://github.com/72/bodymovin-for-Framer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here’s the GitHub repo to the module
        </a>
      </h3>
      <h3>
        <a
          href="https://framer.cloud/lZjXF/"
          target="_blank"
          rel="noopener noreferrer"
        >
          And a demo of a Framer prototype with JSON animations
        </a>
      </h3>
    </MidColumn>

    <Spacer />

    <MidColumn>
      <p>
        Keep in mind that this is not only for simple animations like a
        hamburger menu morphing into a back button — btw, a “simple” animation
        like that one, as mentioned by Gabriel Peal in episode 82 of the
        Fragmented Podcast, took him days to develop it for Android.
      </p>
      <p>This is about complex vector-based animations like this one:</p>
      <img src={animationLoop} alt="Animation Loop" />
      <p>
        Here I had to use an animated GIF. But that’s actually good because we
        can use it as an example:
      </p>
      <ul>
        <li>
          This GIF is 742Kb. I had to reduce its quality a lot, and its
          dimensions are a mere 550 x 380px.
        </li>
        <li>
          The animation as a JSON file is 167Kb. And it’s super sharp because
          vectors… which means that it can also be scaled to any dimension
          without affecting its quality or the file size!
        </li>
        <li>
          The SVG Animation doesn’t exist. It can be done, sure, but it would be
          much more complicated. And remember that another challenge would be to
          recreate it for different platforms, not just for the web, and have a
          consistent result across them.
        </li>
        <li>
          To view more JSON animations like this one created by{" "}
          <a
            href="https://twitter.com/jorisvanr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joris van Raaij
          </a>
          , check{" "}
          <a
            href="https://www.lottiefiles.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LottieFiles
          </a>
          .
        </li>
      </ul>
    </MidColumn>

    <Spacer />

    <MidColumn>
      <h2>Summary</h2>
      <ul>
        <li>
          SVG Animations are complicated! Learn about them, and help non-code
          oriented people in your team find alternatives if needed.
        </li>
        <li>
          Bodymovin is a free plugin for After Effects to export vector-based
          animations as JSON files. (Thanks Hernan Torrisi)
        </li>
        <li>
          Bodymovin’s JSON files are super lightweight. Sometimes an entire
          animation is even smaller than one frame of it as PNG.
        </li>
        <li>
          Use Lottie to run these JSON files on Android and iOS. (Thanks AirBnb)
        </li>
        <li>
          If you use Framer, I created a module that lets you run these
          animations in your prototypes. And here’s a demo.
        </li>
      </ul>
      <p>
        Please note, this post wasn’t titled “SVG Animations Are Dead, Now
        What?” or “Why I Stopped Using SVG Animations and You Should Too”,
        that’s not where this is coming from. I’m curious to know more about
        other workflows, please share yours, specially if you have experience
        launching complex animations across different platforms.
      </p>
    </MidColumn>

    <Spacer />

	<Subscribe />
  </Layout>
)

export default ArticleChangeInMotion


function TwitterMedia(){
  return (
    <div>
      <blockquote class="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          I need a tutorial on how to create this countdown.{" "}
          <a href="https://twitter.com/hashtag/io16?src=hash&amp;ref_src=twsrc%5Etfw">
            #io16
          </a>{" "}
          <a href="https://t.co/LVzoknuMya">https://t.co/LVzoknuMya</a> (Code,
          not After Effects).
        </p>
        &mdash; 72mena (@72mena){" "}
        <a href="https://twitter.com/72mena/status/716340561586720769?ref_src=twsrc%5Etfw">
          April 2, 2016
        </a>
      </blockquote>
    </div>
  )
}

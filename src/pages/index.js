import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Assets
import avatar72 from "../images/72avatar.png";
import avatar72complete from "../images/72completeavatar.png";

//Assets - Writing
import uxsettings from "../images/notepad/uxsettings.jpg";
import keyboard from "../images/notepad/keyboard.jpg";
import unlocking from "../images/notepad/unlocking.jpg";
import layered from "../images/notepad/layered.jpg";
import numbers from "../images/notepad/numbers.jpg"

//Assets - Work
import svgAnim from "../images/work/svgAnim.png";
import sequence from "../images/work/sequenceGame.jpg";
import lottie from "../images/work/lottie.jpg"







const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Intro />

    <ProjectModule 
      client="Disney"
      title="InApp Videos"
      role="Product designer"
      description="A feature in Disney World & Disneyland apps that serves as a channel to promote offers and reconnect with Guests after their vacation."

      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/inappvideo.png"
      device="iPhone11"
    />

    <ProjectModule 
      client="Disney"
      title="Digital Key"
      role="Lead interaction designer"
      description="Digital Key allows Guests staying at Disney Resorts to skip the front desk and unlock their room & common area doors (ie. fitness centers, club level lounges)."
      ctaLabel="View Official Announcement"
      ctaLink="https://www.youtube.com/watch?v=pv3TrttXOh8&feature=youtu.be"

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/DKHBhq.mp4"
      device="iPhone11"
    />

    <ProjectModule 
      client="Disney"
      title="Message Center"
      role="Lead interaction designer"
      description="A feature in the Disney World app where Guests can read all notifications and messages relevant to their vacation."

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/messageCenter.mp4"
      device="iPhone11"
    />

    <ProjectModule 
      client="Disney"
      title="Conversational UI"
      role="Lead interaction designer"
      description="Special request to design and prototype a Conversational UI experience for the Disney World and Disneyland apps. Research and testing done with a prototype that handled text and voice input."

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/cuiDemo.mp4"
      device="iPhone8"
    />

    <ProjectModule 
      client="Disney"
      title="Hi-Fi Prototyping Framework"
      role="Designer & Developer"
      description="Internal prototyping framework for Disney Parks & Resorts. Created on top of Framer back in 2016, based in CoffeeScript and JavaScript."

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/partySelect.mp4"
      device="iPhone8"
    />

    <ProjectModule 
      title="Lottie for Framer"
      role="Open Source Module"
      description="I coded a port of AirBnb's Lottie framework into Framer. This module was heavily used at Disney in 2017~2018 to explore motion in prototypes (ie. Disney Play app)."
      ctaLabel="View GitHub Repo"
      ctaLink="https://github.com/72/lottie-framer"

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/lottieFramer.mp4"
      device="iPhone8"
    />

    <ProjectModule
      client="Globant" 
      title="Innovation Lab"
      role="Design Strategist"
      description="I'm currently leading a remote team of 5 designers across Colombia, Argentina, and US, focused on innovation and value proposition initiatives at Globant, and providing this service to selected partners."
    />


    <Contact />

  </Layout>
)

export default IndexPage


// Components


function ProjectDescription(props){
  return(
    <div class="info">
      <div class="project-description">
        
        { props.client == "Disney" &&
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/disney.png" width="90" />
        }

        { props.client == "Globant" &&
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/GlobantLogo.png" width="110" />
        }

        <h1 class="project-title"> { props.title } </h1>
        <p class="role"> { props.role } </p>
        <p class="description"> { props.description } </p>

        { props.ctaLabel != null &&
          <a href={ props.ctaLink } target="_blank"> { props.ctaLabel } </a> 
        }

      </div>
    </div>
  )
}

function ProjectShowcase(props) {

  let device;

  if(props.device == "iPhone11") {
    device = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/deviceiOS72.png"
  }

  if(props.device == "iPhone8") {
    device = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/devicei8.png"
  }

  return(
    <div class="showcase">
      <div class="project-demo">
        <div class="bg-box"> </div>

        <div class="device">

          { props.image != null &&
            <img class="iphone11img" src={ props.image } />
          }

          { props.video != null &&
            <div dangerouslySetInnerHTML={{ __html: `
              <video
                loop
                muted
                autoPlay
                playsinline
                src="${props.video}"
                class="${props.device}"
              />,
            ` }}></div>
          }

          <img class="deviceFrame" src={device} />

        </div>

      </div>
    </div>
  )
}

function ProjectModule(props){
  return(
    <div class="module">

      <ProjectDescription
        client={ props.client }
        title={ props.title }
        role={ props.role }
        description={ props.description }
        ctaLabel={ props.ctaLabel }
        ctaLink={ props.ctaLink }
      />

      { props.device != null &&
        <ProjectShowcase 
          image={ props.image }
          video={ props.video }
          device={ props.device }
        />
      }

    </div>
  )
}



function Intro(props){
  return (
    <div>

      <div class="header-intro">
        <div>
          <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/avatar.png" alt="Juan F. Mena Avatar" />
        </div>
        <div class="greeting">
          <div class="greeting-inner">
            <h1>Juan F. Mena <span>Pronounced like "menu"</span></h1>
            <h1>I'm a Designer in Seattle</h1>
          </div>
        </div>
      </div>

      <div class="intro-description">
        <p>
          I'm a consultant of UX, interaction design & strategy initiatives at Globant and Disney.
        </p>
        <p>
          I help teams and executives to pitch their initiatives through storytelling, and to find direction through brainstorming & prototyping when there are high levels of uncertainty.
        </p>
      </div>

    </div>
  )
}



function Contact(props){
  return (
    <div className="contact">
      <p>
        Let's talk. Get in touch:
        <br /> <a href="mailto:by72mena@gmail.com">Email</a> -{" "}
        <a href="https://twitter.com/72mena" target="_blank">
          Twitter
        </a>{" "}
        -{" "}
        <a href="https://www.linkedin.com/in/jlfloresmena/" target="_blank">
          LinkedIn
        </a>
      </p>
    </div>
  )
}
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


//Assets
import avatar72 from "../images/self/avatar.png"
import ytlogo from "../images/projects/youtubelogo.svg"
import shortsremix from "../images/projects/shortsremix.png"
import recomp from "../images/projects/RecompClipHB.mp4"
import googleIllustration from "../images/work/gdraw.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Intro />

    <ProjectModule 
      client="YouTube"
      title="Shorts Remix"
      position="Product designer"
      description="Media reuse features in YouTube Shorts. Allows anyone to use the audio or video from other Shorts in their creations."
      ctaLabel="View official announcement"
      ctaLink="https://www.youtube.com/shorts/kS3350cli2w"

      image={shortsremix}
      device="iPhone11"
    />

<ProjectModule 
      client="YouTube"
      title="Shorts Recomposition"
      position="Product designer"
      description="For creators seeking to turn their landscape video into portrait aspect ratio. This mobile feature allows efortless direct manipulation."

      video={recomp}
      device="iPhone11"
    />

    <ProjectModule 
      client="Disney"
      title="InApp Videos"
      position="Product designer"
      description="A feature in Disney World & Disneyland apps to promote offers and reconnect with Guests after their vacation."

      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/inappvideo.png"
      device="iPhone11"
    />

    <ProjectModule 
      client="Disney"
      title="Digital Key"
      position="Interaction designer"
      description="Digital Key enhances the Direct-to-Room experience of Guests staying at Disney Resorts. Unlocks the Guest's room & common area doors (ie. fitness centers, club level lounges)."
      ctaLabel="View Official Announcement"
      ctaLink="https://www.youtube.com/watch?v=pv3TrttXOh8&feature=youtu.be"

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/DKHBhq.mp4"
      device="iPhone11"
    />

    {/* <ProjectModule 
      client="Disney"
      title="Message Center"
      position="Lead interaction designer"
      description="A feature in the Disney World app where Guests can read all notifications and messages relevant to their vacation."

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/messageCenter.mp4"
      device="iPhone11"
    /> */}

    <ProjectModule 
      client="Disney"
      title="Conversational UI"
      position="Interaction designer"
      description="Special request to design and prototype a Conversational UI experience for the Disney World and Disneyland apps. Research and testing done with a prototype that handled text and voice input."

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/cuiDemo.mp4"
      device="iPhone8"
    />

    <ProjectModule 
      client="Disney"
      title="Hi-Fi Prototyping Framework"
      position="Designer & Developer"
      description="Internal prototyping framework for Disney Parks & Resorts. Created on top of Framer Classic, based in CoffeeScript and JavaScript."

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/partySelect.mp4"
      device="iPhone8"
    />

    <ProjectModule 
      title="Lottie for Framer"
      position="Open Source Module"
      description="I coded a port of AirBnb's Lottie framework into Framer Classic. This module was heavily used at Disney to explore motion in prototypes (ie. Disney Play app)."
      ctaLabel="View GitHub Repo"
      ctaLink="https://github.com/72/lottie-framer"

      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/lottieFramer.mp4"
      device="iPhone8"
    />

    <ProjectModule
      client="Globant" 
      title="Innovation Lab"
      position="Design Strategist"
      description="Design Strategy at Globant. I led a remote team of 5 designers across Colombia, Argentina, and US, focused on innovation and value proposition initiatives, and providing this service to selected partners."
    />


    <Contact />

  </Layout>
)

export default IndexPage


// Components


function ProjectDescription(props){
  return(
    <div className="info">
      <div className="project-description">
        { props.client === "YouTube" &&
          <img src={ytlogo} alt="YouTube Logo" width="120" />
        }

        { props.client === "Disney" &&
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/disney.png" alt="Disney Logo" width="90" />
        }

        { props.client === "Globant" &&
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/GlobantLogo.png" alt="Globant Logo" width="110" />
        }

        <h1 className="project-title"> { props.title } </h1>
        <p className="role"> { props.position } </p>
        <p className="description"> { props.description } </p>

        { props.ctaLabel != null &&
          <a href={ props.ctaLink } target="_blank" rel="noopener noreferrer" > { props.ctaLabel } </a> 
        }

      </div>
    </div>
  )
}

function ProjectShowcase(props) {

  let device;

  if(props.device === "iPhone11") {
    device = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/deviceiOS72.png"
  }

  if(props.device === "iPhone8") {
    device = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/563253/devicei8.png"
  }

  return(
    <div className="showcase">
      <div className="project-demo">
        <div className="bg-box"> </div>

        <div className="device">

          { props.image != null &&
            <img className="iphone11img" alt="Project Screenshot" src={ props.image } />
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

          <img className="deviceFrame" alt="Device Frame" src={device} />

        </div>

      </div>
    </div>
  )
}

function ProjectModule(props){
  return(
    <div className={props.device ? 'module' : 'one-module'}>

      <ProjectDescription
        client={ props.client }
        title={ props.title }
        position={ props.position }
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

      <div className="intro-description">

		<div className="intro-personal">
			<div>
				<img className="intro-avatar" src={avatar72} alt={"Personal photo"} />
			</div>
			<div>
				<p className="intro-name">JUAN FLORES MENA</p>
				<p className="intro-role">Product Design & Prototyping</p>				
			</div>
		</div>

		<div>
			<p className="intro-summary">Currently at Google.
			<br/>I'm designing mobile tools for video creators at YouTube Shorts. 
			<br/>Check out my previous work at YouTube and Disney:</p>
		</div>



        {/* <div>
	        <img className="googleImage" src={googleIllustration} alt={"Google Illustration"} />
        </div> */}
        {/* <small>Currently at Google</small> */}
        {/* <a class="resume" href="Resume-Juan-Flores-Mena.pdf" rel="noopener noreferrer">View Resume</a> */}
      </div>

    </div>
  )
}


function Contact(props){

  return (
    <>
      <div className="contact">
        <p>
          Let's talk. Get in touch:
          <br /> <a href="mailto:by72mena@gmail.com" rel="noopener noreferrer">Email</a> -{" "}
          <a href="https://www.threads.net/@72mena" target="_blank" rel="noopener noreferrer">
            Threads
          </a>{" "}
          -{" "}
          <a href="https://www.linkedin.com/in/jlfloresmena/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </>
  )
}
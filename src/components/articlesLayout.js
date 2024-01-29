import React from "react"

//Assets
import avatar72 from "../images/72avatar.png";

export function PostTitle(props) {
  return (
    <div className="postTitle">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}

export function Author(props) {
  return (
    <div className="author">
      <div>
        <img src={avatar72} alt={"Avatar"} />
      </div>
      <div>
        <h3>Juan Flores Mena</h3>
        <p>
          Product Design & Prototyping
          <br />
          <a href="https://www.threads.net/@72mena" target="_blank" rel="noopener noreferrer">@72mena</a>
        </p>
      </div>
    </div>
  )
}

export function Subscribe(props){
	return(
		<div className="notesSubscribe">
			<iframe 
			src="https://72mena.substack.com/embed" 
			width="480" 
			height="350" 
			style={{ border: '1px solid #EEE', background: 'white', borderRadius: '12px' }} 
			>
			</iframe>
		</div>
	)
}

/** 
 * 1 main core column of text, off-centered, with white space to the sides.
 * Use this for the main content, and consider the side notes attribute as needed.
 */
export function GridType1(props) {
  return (
    <div>
      <h2>{props.header}</h2>
      <div className="sectionLeft">
        {props.children}
      </div>
    </div>
  )
}


/** 
 * A block of text aligned to the left, with white space to the right.
 * Use this for intro sections.
 */
export function GridType2(props) {
  return (
    <div>
      <h2>{props.header}</h2>
      <div className="sectionLeft">
        {props.children}
      </div>
    </div>
  )
}

/** 
 * 2 columns of content with additional space to the sides.
 * Use this to add paragraphs next to the images.
 */
export function GridType3(props) {
  return (
    <div className="gridSectionType3">
      <div />
      <div>
        <img src={props.image} alt={props.altText} />
      </div>
      <div />
      <div>{props.children}</div>
      <div />
    </div>
  )
}

/** 
 * 2 columns of content without space to the sides.
 * Use this create variations on the layout between Type 3 and Type 4.
 */
export function GridType4(props) {
  return (
    <div className="gridSectionType4">
      <div>
        <img src={props.image} alt={props.altText} />
      </div>
      <div />
      <div>{props.children}</div>
    </div>
  )
}

export function MidColumn(props){
  return(
    <div style={{ width: "100%", maxWidth: props.maxWidth, margin: "0 auto 40px" }}>
      {props.children}
    </div>
  )
}
MidColumn.defaultProps = {
  maxWidth: "650px",
}


export function Spacer(){
  return <div className="customDivider" />
}

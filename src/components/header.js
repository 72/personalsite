import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        textAlign: "center",
      }}
    >
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, auto)",
          justifyContent: "center",
          gridColumnGap: "30px",
          padding: `20px 0 20px`,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/#work">Work</Link>
        <Link to="/#writing">Writing</Link>
        <a
          href="https://twitter.com/72mena"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </nav>
    </div>
    <hr
      style={{
        backgroundColor: "#8E9C8A",
        opacity: 0.6,
        margin: 0,
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

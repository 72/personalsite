import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      //   background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto 40px`,
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
          padding: `30px 0 30px`,
        }}
      >
        <Link to="/">About</Link>
        <Link to="/lab">Lab</Link>
        <Link to="/notepad">Notepad</Link>
        <a href="https://twitter.com/72mena" target="_blank">
          Twitter
        </a>
      </nav>
      <h2 className="lightText">Juan Flores Mena</h2>
    </div>
    <hr
      style={{
        backgroundColor: "#8E9C8A",
        opacity: 0.6,
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

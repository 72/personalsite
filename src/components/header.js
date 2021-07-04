import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="menu">
      <div className="nav">
        <ul>
          <li><Link to="/">Work</Link></li>
          <li><Link to="/writing">Writing</Link></li>
          <li><Link to="/drawings">Drawings</Link></li>
          {/* <li><a
          href="https://twitter.com/72mena"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a></li> */}
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "./../images/3-01.png"
import "./../styles/header.scss"

const Header = ({ siteTitle }) => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const currScroll = window.pageYOffset
      if (currScroll > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  })

  return (
    <header className={isScrolled ? "Header HeaderScrolled" : "Header"}>
      <div className="HeaderGroup">
        <Link to="/">
          <img src={icon} alt="icon" />
        </Link>
        <Link to="/courses">
          <a> Courses</a>
        </Link>
        <Link to="/downloads">
          <a> Downloads</a>
        </Link>
        <Link to="/workshops">
          <a> Workshops</a>
        </Link>
        <Link to="/buy">
          <button> Buy</button>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

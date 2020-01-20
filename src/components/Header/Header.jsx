import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from './header.module.scss'
import React from "react"

const Header = ({ siteTitle }) => (
  <div className={styles.Header}>

      <h1 className= {styles.Title}>
        <Link
          to="/"
          className={styles.Link}
        >
          {siteTitle}
        </Link>
      </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

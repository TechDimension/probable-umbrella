import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(223, 159, 22)`,
      marginBottom: `1.45rem`,
      width: '13em',
      padding: '1em'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        textAlign:"center",
        padding: `.15rem .1rem`,
      }}
    >
      <h1 style={{ margin: 0, width:'5em' }}>
        <Link
          to="/"
          style={{
            color: `rebeccapurple`,
            textDecoration: `none`,
          }}
        >
          <Image style={{width: '50px', display:'inline' }}/>
          {siteTitle}
        </Link>
      </h1>
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

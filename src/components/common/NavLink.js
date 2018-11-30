import React from 'react'
import { Link } from 'gatsby'


const NavLink = (props) => {
  return (
    <Link className="navbar-item" to={props.to}>
      <div>{props.text || props.children}</div>
    </Link>
  )
}

export default NavLink;


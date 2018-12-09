import React from 'react'
import { Nav } from "./styled"
import NavLink from "./common/NavLink"

const Menu = () => (
  <Nav>
    <div style={{ fontWeight: 'bold', color: 'white' }} >
      <NavLink to="/" text="<Taylor O'Reilly/>" />
    </div>
    <NavLink to="/blog" text="Blog" />
    <div>
      <a href="https://github.com/toreilly317" target="_blank" >
        WORK
        </a>
    </div>
    <NavLink to="/contact" text="Contact" />
    <div>

    </div>
  </Nav>
)



export default Menu

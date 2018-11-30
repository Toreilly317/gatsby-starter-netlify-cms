import React from 'react'
import github from '../img/github-icon.svg'
import { Nav, Icon } from "./styled"
import NavLink from "./common/NavLink"

const Menu = () => (
  <Nav>
    <div style={{ fontWeight: 'bold', color: 'white' }} >
      <NavLink to="/" text="<Taylor O'Reilly/>" />
    </div>
    <NavLink to="/blog" text="Blog" />
    {/* <NavLink to="/projects" text="Projects" /> */}
    <NavLink to="/contact" text="Contact" />
    <NavLink to="https://github.com/toreilly317">
      <Icon>
        <img src={github} alt="Github" />
      </Icon>
    </NavLink>
  </Nav>
)



export default Menu

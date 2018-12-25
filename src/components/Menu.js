import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBriefcase, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faUser, faBriefcase, faHome, faEnvelope)


const LinkWithIcon = ({ to, text, icon }) => (

  <NavLink>
    <Link to={to}>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>{text}</div>

    </Link>
  </NavLink>

)



const NavLink = styled.div`
  flex: 1;
  font-size: 2rem;
  text-align: center;
  background: darken(#222, 5%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 2.7rem;
  &:first-child{
    border-radius: 4px 4px 0px 0px;
  }
   &:last-child{
    border-radius: 0px 0px 4px 4px;
  }
  a{
    margin: auto 0;
    color: currentcolor;
    text-decoration: none;
    text-transform: uppercase;
  }
`;



export default props => (
  <>
    <LinkWithIcon to="/" text="Home" icon={faHome} />
    {/* <LinkWithIcon to="/about" text="About" icon={faUser} /> */}
    <NavLink>
      <a href="https://github.com/toreilly317/" rel="noreferrer" target="_blank">
        <div>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div>Work</div>
      </a>

    </NavLink>
    {/* <LinkWithIcon to="/portfolio" text="Work" icon={faBriefcase} /> */}
    <LinkWithIcon to="/contact" text="Contact" icon={faEnvelope} />
  </>
);

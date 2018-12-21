import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const Header = styled.header`
  display: flex;
  margin-bottom: 1rem;
 
  .nav-links {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-around;
  margin-left: auto;
  text-transform: uppercase;
  padding: 1rem;

  @media screen and (max-width: 400px){
    width: 100%;
  }
    
  }

`;

const NavLink = styled.div`
  a {
    color: var(--color-black);
    font-size: 1.6rem;
  }
`;

export default props => {
  return (
    <Header>
      <div className="nav-links">
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        {/* <NavLink>
          <Link to="/blog">Blog</Link>
        </NavLink> */}
        <NavLink>
          <a href="http://github.com/toreilly317" target="_blank" rel="noopener noreferrer">Work</a>
        </NavLink>
        <NavLink>
          <Link to="/contact">Contact</Link>
        </NavLink>
      </div>
    </Header>
  );
};

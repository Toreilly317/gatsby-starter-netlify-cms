import React from "react";
import styled from "styled-components"
import { Link } from "gatsby"


const FullPageHero = styled.div`
  margin: 0 auto;
  background: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 3rem;
  padding: 5rem;
  align-items: center;
  height: 100vh;
`

export default () => (
  <FullPageHero>
    <div>
      <h1>Thanks!</h1>
      <p>I'm looking forward to speaking with you</p>
      <Link to={"/"}>
        <small>← Go Home</small>
      </Link>
    </div>
  </FullPageHero>
);
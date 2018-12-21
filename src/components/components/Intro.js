import React from "react";
import styled from "styled-components";

const Intro = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  height: 100%;
  h1 {
    text-align: center;
    font-size: 6rem;
    margin-bottom: 1rem;
   
  }
  div {
    text-align: right;
    font-size: 2rem;
    padding-right: 4rem;
  }

 
`;

export default () => (
  <Intro>
    <h1>Hello, I'm Taylor O'Reilly!</h1>
    <div>Full Stack Js Developer | Tech Enthusiast | Musician</div>
    <div>Living In - Boston/MA</div>
  </Intro>
);

import React from 'react'
import styled from "styled-components";
import Layout from "../components/Layout";
import BostonImage from "../../static/img/boston.jpg"
import { Link } from "gatsby"
import Button from "../components/styled/Button"

const PostContainer = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-items: center;
justify-content: center;
  div {
    font-size: 2rem;
    font-weight: 400;
    padding: 0px 2rem;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const ButtonContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`




export default (props) => (
  <Layout title="Taylor O'Reilly" image={BostonImage}>
    <PostContainer>
      <h1>I'm Taylor O'Reilly!</h1>
      <h2>FullStack Js Dev | Tech Enthusiast | Musician</h2>
      <div>Hey There, I'm Taylor O'Reilly</div>
      <div>
        I'm a fullstack developer out of Boston MA and I love building things with JavaScript.
    </div>
      <div>
        These days Javascript is everywhere. Servers, IoT
        devices, drones, you name it!
    </div>
      <div>
        So if you're in need of a new website, web app, or just have a crazy idea you want to see brought to life,
          I'm always looking for new clients or an amazing agency to work with. Let's talk soon!
    </div>
      <ButtonContainer>
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </ButtonContainer>

    </PostContainer>
  </Layout>
);







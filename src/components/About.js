import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
    font-size: 6rem;
  }

  div {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export default () => (
  <AboutSection>
    <h1 className="title">About</h1>
    <div>I love JavaScript and everything web.</div>
    <div>
      When it comes to coding for the web, I love every aspect. I keep my thumb
      on the pulse of community and engage with new technology and frameworks as
      they evolve with the web. I'm also starting to blog what I learn along the
      way!
    </div>
    <div>
      I built this site using GatsbyJs along with Netlify CMS. Gatsby is a new
      blazingly fast static site generator built with React and GraphQL. and
      Netlify CMS is a seamlessly integrated CMS platform created by my favorite
      hoston comapny, Netlify. Netlify and Gatsby is what allows for the awesome
      page load times and quick development.
    </div>
    <div>
      React, Redux, Node.js, GraphQL, Express, Gatsby, Webpack and AWS are the
      main tricks up my sleeve. I am also obsessed with making the web look
      pretty with modern CSS and techniques.
    </div>
  </AboutSection>
);

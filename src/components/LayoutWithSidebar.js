import React from "react";
import styled from 'styled-components';
import Layout from "./Layout"

const WithSidebar = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const SideBar = styled.div`
  flex: 0.7;
  max-height: 100vh;
  font-family: var(--font-heading);
  img {
    flex: 2;
  }
`;


const FeaturedImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

const TagArea = styled.div`
  display: flex;
  font-size: 1.3rem;
  padding: 1rem;
  justify-content: space-around;
  background: "var(--color-gray)",
  &:not(:last-child) {
    border-right: 1px solid black;
  };
`;


const TemplateWrapper = ({ children, title, image }) => (
  <Layout title={title}>
    <WithSidebar>
      {children}
      <SideBar>
        <FeaturedImage src={image} />
        <TagArea>
          {" "}
          <div>Javascript</div>
          <div>Web Dev</div>
          <div>React</div>
        </TagArea>
      </SideBar>
    </WithSidebar>
  </Layout>

);

export default TemplateWrapper





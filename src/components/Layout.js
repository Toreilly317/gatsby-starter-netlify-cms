import Helmet from 'react-helmet'
import React from "react";
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Menu from "./Menu"
import "./base.css"


const Container = styled.div`
   min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: black; 
  @media screen and (max-width: 375px){
    flex-direction: column;
  }`;


const Sidebar = styled.div`
   background: var(--color-gray);
  flex: 1;
  padding: 2rem;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 375px){
    flex-direction: row;
    width: 100%;
    align-self: flex-start;
    justify-content: space-around;
    flex: 0;
    padding: 1rem;
  }
`;

const Content = styled.div`
flex: 7;
padding: 2rem;
`


const TemplateWrapper = ({ children, title, date }) => (
  <StaticQuery
    query={graphql`
          query HeadingQuery {
              site {
                siteMetadata {
                  title,
                  description,
                }
              }
            }
        `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <meta name="google-site-verification" content="qgyUDs477NR9tHI0f0Ci0qU9FECLNiv66cj_qiEX5kw" />
        </Helmet>
        <Container>
          <Sidebar>
            <Menu />
          </Sidebar>
          <Content>
            {children}
          </Content>
        </Container>
      </>
    )}
  />
)

export default TemplateWrapper


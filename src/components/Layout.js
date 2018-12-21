import Helmet from 'react-helmet'
import React from "react";
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Header from "./Header";
import "./base.css"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    color: var(--color-black);
  }
`;

const Intro = styled.div`
  flex: 1.4;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("https://d279m997dpfwgl.cloudfront.net/wp/2018/01/lance-anderson-393963-1000x667.jpg");
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 375px) {
    flex: 1;
  }
`;

const ContentArea = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
  grid-column: 2/3;
  color: var(--color-black);
`;

const Title = styled.div`
  height: 100%;
  font-family: var(--font-heading);
  grid-row: 2/3;
  display: flex;
  font-family: "lato";
  align-items: center;
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2rem;
  text-shadow: 0px 2px rgba(0, 0, 0, 0.9);
  font-size: 5rem;
  font-weight: 900;

  @media screen and (max-width: 375px) {
    font-size: 3rem;
    justify-content: center;
    width: 100%;
  }
`;

const IntroButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-items: center;
  align-self: flex-end;
  div {
    background: var(--color-gray);
    align-self: flex-end;
    color: black;
    padding: 0.5rem;
    font-size: 1.2rem;
    text-transform: uppercase;

    @media screen and (min-width: 800px) {
      padding: 1rem;
      align-items: center;
      justify-items: center;
      align-self: flex-end;
    }
  }
`;



const DateBlock = styled.div`
  display: flex;
  font-size: 4rem;
`;
const DateArea = ({ date }) => {

  if (date) {
    return (
      <IntroButton>
        <DateBlock>
          <div>{date}</div>
        </DateBlock >
      </IntroButton>

    )
  } else {
    return <div></div>
  }



};


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
        </Helmet>
        <Container>
          <Intro>
            <Title>{title}</Title>
            <DateArea date={date} />
          </Intro>

          <ContentArea>
            <Header />
            {children}
          </ContentArea>
        </Container>
      </>
    )}
  />
)

export default TemplateWrapper


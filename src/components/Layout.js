import React from 'react'
import Helmet from 'react-helmet'
import "./base.css"
import styled from 'styled-components'
import Menu from "./Menu"

const Header = styled.header`
  background: #000000;
  height: 7rem;
  display: flex;
  border-bottom: 1px solid white;
`

const Content = styled.div`

`

const Container = styled.div`
  
  /* grid-template-columns: 2rem 1fr 4fr 2rem;
  grid-template-rows: 1rem auto 1rem; */
  
  
`

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet title="Taylor O'Reilly" />
    <Header>
      <Menu />
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
)


export default TemplateWrapper

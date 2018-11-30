import React from 'react'
import Helmet from 'react-helmet'
import "./base.css"
import { Container, Header, Content } from './styled'
import Menu from "./Menu"

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

import React from 'react'
import Menu from "../components/Menu"
import styled from 'styled-components';
import BostonIMG from "../../static/img/boston.jpeg"


const Wrapper = styled.div`
display: grid;
height: 100vh;
grid-template-rows: minmax(5rem, 10rem) 4fr 1fr;
background-image: url(${BostonIMG});
background-size: cover;
background-position: center;
@media screen and (max-width: 400px){
  grid-template-columns: 1fr;
}
`


const Header = styled.header`
  background: #191102;
  border-bottom: 1px solid white;
  display: flex;
  width: 100vw;
  
`

const Footer = styled.footer`
  background: #191102;
  display: flex;
  border-bottom: 1px solid white;
`
const Content = styled.div`
  display: flex;
`

const Intro = styled.div`
font-size: 8rem;
font-weight: 900;
color: #191102;
border-right: 5px solid #191102;
padding: 5px;
align-self: flex-end;
font-family: var(--text-heading);
&:last-child {
  font-size: 6rem;
}

`
const Bio = styled.div`
  font-size: 4rem;
  color: #000000;
  display: grid;
  grid-template-rows: 3fr 2fr 1fr;
`

const ButtonArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`



export default class IndexPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Menu />
        </Header>

        <Content>

        </Content>

        <Footer>
          <a>Hello</a>
        </Footer>
      </Wrapper>
    )
  }
}





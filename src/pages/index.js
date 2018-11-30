import React from 'react'
import Layout from '../components/Layout'
import Cartoon from '../components/Cartoon'
import { Heading1 } from "../components/styled"
import styled from 'styled-components';

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
background: rgba(42, 98, 143, 1);
border-radius: 3px;
padding: 4rem;
justify-items: center;
align-items: center;
text-align: center;
@media screen and (max-width: 400px){
  grid-template-columns: 1fr;
}
`

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <div>
            <Cartoon />
          </div>
          <div>
            <Heading1>Hey I'm Taylor!</Heading1>
            <Heading1>I Make Wicked Good Stuff For The Internet</Heading1>
          </div>
        </Wrapper>
      </Layout>
    )
  }
}





import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 10vh 1fr;
  grid-template-areas: 
  "header header" 
  "content content";
`

export const Header = styled.header`
grid-area: header;
display: flex;
width: 100vw;
display: block;
`

export const Content = styled.main`
  color: white;
  padding:2rem;
  grid-area: "content";
  width: 100vw;
  grid-row:2/-1;
`

export const Section = styled.section`
  padding: 2rem;
`

export const Footer = styled.footer`

`
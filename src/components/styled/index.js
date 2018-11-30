import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: 
  "header header" 
  "content content" 
  "content content";
`

export const Header = styled.header`
grid-area: header;
background:black;
display: flex;
width: 100vw;
display: block;
`

export const Content = styled.main`
  color: white;
  padding:2rem;
  grid-area: "content";
  background: linear-gradient(to bottom, #c2e59c, #64b3f4); 
  width: 100vw;
  grid-row:2/-1;
`

export const Section = styled.section`
  padding: 2rem;
`

export const Icon = styled.div`
background: white;
text-align: center;
margin: 0 auto;
height: 28px;
width:28px;
border: 1px solid black;
border-radius: 100%;
img{
  height: 100%
}
`

export const Nav = styled.nav`
background: black;
font-size: 2rem;
display: flex;
flex-direction: row;
justify-items: space-between;
justify-content: space-between;
align-self: center;
padding: 2rem;
a{
  color: white;
  text-decoration: none;
  
  

  &:hover {
    text-decoration: underline;
    color: white;
  }
  &:visited{
    
  }
}
@media (max-width: 600px) {
 
}
`;

//FONTS
export const Heading1 = styled.h1`
  font-size: 3rem;
  color: white;
  font-weight: 400;
`
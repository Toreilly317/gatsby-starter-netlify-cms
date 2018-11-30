import styled from 'styled-components'

export const Nav = styled.nav`
background: #2F4858;
font-size: 2rem;
display: flex;
flex-direction: row;
justify-items: space-between;
justify-content: space-between;
align-self: center;
padding: 2rem;
a{
  color: #F6AE2D;
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
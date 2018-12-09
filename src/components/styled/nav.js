import styled from 'styled-components'

export const Nav = styled.nav`
font-size: 2rem;
text-align: center;
display: flex;
align-content: center;
justify-content: space-between;
align-items: center;
a{
  font-size: 1.6rem;
  color: white;
  text-transform: uppercase;
  margin: 0;
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
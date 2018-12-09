import styled from "styled-components";

export const Grid = styled.div`
display: grid;
width: 100%;
grid-template-rows: repeat(16, 1fr)
`;

export const GridItem = styled.div`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
`
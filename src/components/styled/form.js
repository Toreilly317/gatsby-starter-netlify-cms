import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  align-self: center;
  grid-gap: 2rem;
  background: white;
  border-radius: 3px;
  padding: 2rem;
  align-items: space-around;
  margin: 0 auto;
  max-width: 500px;
`

export const Input = styled.input`
  border-radius: 3px;
  box-shadow: 0px 0px 1px rgba(0,0,0,.5) inset;
  padding: 2rem;
  font-size: 1.5rem;
  border: 1px solid black;
  display: inline-block;
`

export const SubmitButton = styled.button`
  color: #F6AE2D;
  background: #2F4858;;
  border-radius: 3px;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  color: white;
  background: black;
  display: inline-block;
`;


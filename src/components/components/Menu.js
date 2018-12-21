import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  position: fixed;
  width: 100vw;
  background: var(--color-blue);
  top: 0;
  display: flex;
  align-items: flex-end;
  color: var(--color-white);
  text-transform: capitzlize;
  font-weight: 400;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 2.5rem;
  padding: 1rem 3rem 1rem 2rem;
`;

export default () => (
  <Menu>
    <MenuItem>About</MenuItem>
    <MenuItem>Contact</MenuItem>
  </Menu>
);

import React from "react";
import styled from "styled-components";

const Tile = styled.section`
  display: grid;
  grid-template-rows: 1fr 10vh;

  flex-direction: column;
  height: 100vh;
  .content {
    flex: 4;
    padding: 4rem;
    .title {
       text-shadow: -2px -3px 0px rgba(0,0,0,.2);
      margin: 25px 0 25px;
      font-size: 6rem;
    }
  }
`;

const ClickDown = styled.div`
  display: ${props => (props.hideArrow === "true" ? "hidden" : "flex")};
  flex-direction: column;
  font-size: 2rem;
  flex: 1;
  background: var(--color-yellow);
  justify-content: center;
  padding: 2.5rem;
  color: black;
  justify-self: center;
  .arrow {
    font-size: 3rem;
  }
`;

export default props => (
  <Tile>
    <div className="content">{props.children}</div>
    {props.hideArrow ? (
      <div style={{ alignSelf: "flex-end" }} />
    ) : (
      <ClickDown>
        <div className="arrow">&#11133;</div>
      </ClickDown>
    )}
  </Tile>
);

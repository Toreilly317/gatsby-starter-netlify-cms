import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Tile from "./components/Tile";
import styled from "styled-components";
import "./styles.css";

const Container = styled.div`
  position: relative;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Tile>
        <Intro />
      </Tile>
      <Tile>
        <About />
      </Tile>
      <Tile hideArrow>
        <Contact />
      </Tile>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

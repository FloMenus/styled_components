import "./App.css";
import styled from "styled-components";

import GlobalStyle from "./CreateGlobalStyle";
import { darkblue } from "./style/colors";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/HeroContainer";

function App() {
  const App = styled.div``;
  return (
    <>
      <GlobalStyle />
      <App>
        <Navbar />
        <Hero />
      </App>
    </>
  );
}

export default App;

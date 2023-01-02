import { createGlobalStyle } from "styled-components";
import { darkblue } from "./style/colors";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SF Mono', sans-serif;
    src: url("https://fonts.cdnfonts.com/css/sf-mono");
}

  body {
    margin: 0;
    padding: 0;
    background: ${darkblue};
    font-family: 'SF Mono', sans-serif;
    font-style: normal;
    font-size: 12px;
    anti-aliasing: antialiased;
  }
`;

export default GlobalStyle;

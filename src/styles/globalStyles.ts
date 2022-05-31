import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import { ScrollCustom } from "./scroll";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Poppins";
  }

  html,body,#__next{
    ${ScrollCustom()}
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media(max-height: 900px){
        font-size: 55%;
    }
  }

  body {
    background-color: ${defaultTheme.colors.white};
    font-size: 1.6rem;
  }


`;

export default GlobalStyles;

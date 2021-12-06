import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import { ScrollCustom } from "./scroll";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/roboto-v27-latin-regular.woff2') format('woff2'); 

}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: local('')
       url('/fonts/roboto-v27-latin-500.woff2') format('woff2');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/roboto-v27-latin-700.woff2') format('woff2');
}

/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/poppins-v15-latin-500.woff2') format('woff2');
}
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2');
}
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,body,#__next{
    ${ScrollCustom()}
    font-size: 62.5%;
    @media(max-height: 900px){
        font-size: 55%;
      }
  }

  body {
    background-color: ${defaultTheme.colors.white};
    font-family: "Poppins";
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;

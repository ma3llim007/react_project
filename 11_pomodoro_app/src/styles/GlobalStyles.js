import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html,body{
        background-color:${(props) => props.theme.colors.bg};
        font-size: 62.5%;
    }
    body{
        font-size: 1.6rem;
        color: white;
      }
    `;

export default GlobalStyles;

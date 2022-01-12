import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background:${({ theme }) => theme.colors.background} fixed;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
        font-family: sans-serif;
        letter-spacing: 1.5px;
    }

    body {
        width: 100%; 
    }

    ul, a {
        text-decoration: none;
        list-style: none;
    }
`
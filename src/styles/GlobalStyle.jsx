import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        width: 100vw;
        background:${({ theme }) => theme.background};
        font-size: 1rem;
        color: ${({ theme }) => theme.text};
        font-family: sans-serif;
    }

    ul, a {
        text-decoration: none;
        list-style: none;
    }
`
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        width: 100%;
        background:${({ theme }) => theme.background} fixed;
        
        font-size: 1rem;
        color: ${({ theme }) => theme.text};
        font-family: sans-serif;
        letter-spacing: 1.5px;
    }

    ul, a {
        text-decoration: none;
        list-style: none;
    }
`
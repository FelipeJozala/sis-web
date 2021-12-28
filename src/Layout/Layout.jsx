import React, { useState} from 'react'
import Navbar from "../components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Light, Dark } from "../styles/themes/themes";
import { MainContainer } from './styles';

const Layout = ({ children }) => {

    const [theme, setTheme] = useState(Dark)

    return (
        <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Navbar/>
            <MainContainer>
                {children}
            </MainContainer> 
        </ThemeProvider>
        </>
    )
}

export default Layout
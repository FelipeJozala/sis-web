import styled from "styled-components";
import Image from "next/image";

export const NavContainer = styled.div`

    background: ${({theme})=> theme.primary};
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {

        flex-direction: row;
        justify-content: flex-end;
   }
`

export const RightContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    height: 72px;

    @media only screen and (min-width: 768px) {

        display: flex;
        width: 50%;
        justify-content: flex-end;
        margin-right: 80px;
    }
`

export const LeftContainer = styled.div`

    display: none;

    @media only screen and (min-width: 768px) {

        display: flex;
        flex-direction: row;
        align-items: center;
        width: 50%;
        height: 72px;
        margin-top: 0;
        

        a {
            color: ${({theme})=> theme.text};
            padding: 0.5rem;
            font-size: 1rem;
            margin-left: 10px;
        }
   }
`

export const BurgueMenu = styled.button`

    border: none;
    background: none;
    width: 60px;
    text-justify: auto;
    text-align: center;
    font-size: 45px;
    color: ${({theme})=> theme.text};
    margin-left: 10px;

    @media only screen and (min-width: 768px) {

        display: none;
    }
`

export const MobileMenu = styled.div`

    background: ${({theme})=> theme.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 72px);
    width: 100vw;
    position: absolute;
    padding-top: 25px;
    visibility: ${props => props.menuToggle ? 'visible' : 'hidden'};
    

    a {
        color: ${({theme})=> theme.text};
        padding: 1rem;
        font-size: 1.4rem;
        margin-left: 10px;
    }
    
    @media only screen and (min-width: 768px) {

        display: none;

    }
` 

export const Brand = styled(Image)`
    height: 100%;
    margin-right: 30px;

`
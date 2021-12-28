import styled from "styled-components";

export const NavContainer = styled.div`
    background: ${({theme})=> theme.primary};
    width: 100vw;
    height: 60px;
    display: flex;
    flex-direction: row;
`
export const RightContainer = styled.div`
    
    display: none;

   @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 50%;
   }

`

export const LeftContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: 50%;
    }

    

`

export const BurgueMenu = styled.button`
    border: none;
    background: none;
    width: 60px;
    text-justify: auto;
    text-align: center;
    font-size: 45px;
    color: ${({theme})=> theme.background};

    @media only screen and (min-width: 768px) {
        display: none;
    }
`
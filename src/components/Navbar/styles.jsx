import styled from "styled-components";

export const NavContainer = styled.div`

    background: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    @media only screen and (min-width: 768px) {

        flex-direction: row;
        justify-content: flex-end;
    }
`

export const MobileNav = styled.div`
    background: ${({theme})=> theme.glassBase.background};
    backdrop-filter: ${({theme})=> theme.glassBase.backdropFilter};
    -webkit-backdrop-filter: ${({theme})=> theme.glassBase.webkitFilter};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    height: 62px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

export const DesktopNav = styled.div`

    display: none;

    @media only screen and (min-width: 768px) {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 62px;
        margin-top: 0;
   }
`

export const BurgueMenu = styled.button`

    border: none;
    background: none;
    width: 60px;
    text-justify: auto;
    text-align: center;
    font-size: 45px;
    color: ${({theme})=> theme.colors.text};
    margin-left: 10px;
    cursor: pointer;

    @media only screen and (min-width: 768px) {

        display: none;
    }
`

export const MobileMenu = styled.div`

    background: ${({theme})=> theme.glassBase.background};
    backdrop-filter: ${({theme})=> theme.glassBase.backdropFilter};
    -webkit-backdrop-filter: ${({theme})=> theme.glassBase.webkitFilter};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 62px);
    width: 100vw;
    position: absolute;
    padding-top: 25px;
    visibility: ${props => props.menuToggle ? 'visible' : 'hidden'};
    z-index: 1;

    a {
        color: ${({theme})=> theme.colors.text};
        font-size: 1.4rem;
    }
    
    @media only screen and (min-width: 768px) {

        display: none;

    }
` 
export const LinkContainer = styled.div`
    width: 100vw;
    text-align: center;
    padding: 2vh;
    cursor: pointer;

    

    @media only screen and (min-width: 768px) {
        display: flex;
        width: fit-content;
        height: 60%;
        align-items: center;
        justify-content: center; 
        margin: 0 10px;
        position: relative;

        ::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: ${({theme})=> theme.colors.secondary};
            bottom: 5px;
            left: 0;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 200ms ease-in;
            
        }

        :hover {

            ::after{
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    
    }
    
`
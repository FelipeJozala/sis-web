import styled from "styled-components";
import { FaAngleDown } from 'react-icons/fa'

export const ApodContainer = styled.div`
    display: flex;
    box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
    border-radius: 8px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 100%;
    height: 90%;
    position: relative;
    
    @media only screen and (min-width: 768px) {

        flex-direction: row;
    }
`

export const InfoContainner = styled.div`
    text-align: center;
    background: ${({theme})=> theme.glassBase};
    backdrop-filter: blur(20px);
    border-radius: 8px 8px 0px 0px;
    position: absolute;
    padding: 10px;
    height: 100%;
    width: 100%;
    display: none;

    @media only screen and (min-width: 768px) {

        display: unset;
        position: unset;
        border-radius: 8px 0px 0px 8px;
        height: auto;
        min-width: 200px;
        max-width: 350px;

    }
`

export const PageTittle = styled.legend`
    color: ${({theme})=> theme.text};
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 10px;
`

export const ApodTittle = styled.h4`
    color: ${({theme})=> theme.text};
    padding: 10px;
    margin-bottom: 10px;
`

export const StyledList = styled.ul`

    li {
    margin-bottom: 3px;

    }
`

export const NasaImage= styled.img`
    max-height: 100vh;
    max-width: 100%;
    border-radius: 8px;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        max-width: 70vw;
        border-radius: 0px 8px 8px 0px;
    }
`

export const VideoFrame= styled.iframe`
    max-height: 100vh;
    max-width: 100%;
    border-radius: 8px;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        max-width: 70vw;
        border-radius: 0px 8px 8px 0px;
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    background: ${({theme})=> theme.glassBase};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 6px;
    width: 100%;
    height: 1.7rem;
    
    @media only screen and (min-width: 768px) {

        display: none;
    }
    
`

export const DownIcon = styled(FaAngleDown)`
    font-size: 2rem;
    position: absolute;

    @media only screen and (min-width: 768px) {

        display: none;
    }
`
import styled from "styled-components";

export const ApodContainer = styled.div`
    background: ${({theme})=>theme.glassBase.background};
    box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
    backdrop-filter: ${({theme})=> theme.glassBase.backdropFilter};
    -webkit-backdrop-filter: ${({theme})=> theme.glassBase.webkitFilter};
    border: ${({theme})=>theme.glassBase.border};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
    z-index: -1;
    
    @media only screen and (min-width: 768px) {
        padding: 0;
        max-height: 90%;

    }
`

export const InfoContainner = styled.div`
    text-align: center;
    border-radius: 0;
    width: 100%;
    height: 300px;
    padding: 1rem;

    @media only screen and (min-width: 768px) {
        background: ${({theme})=>theme.glassBase.background};
        box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
        backdrop-filter: ${({theme})=> theme.glassBase.backdropFilter};
        -webkit-backdrop-filter: ${({theme})=> theme.glassBase.webkitFilter};
        position: absolute;
        height: fit-content;
        border-radius: 8px 0px 0px 8px;
        bottom: 0;
    }
`

export const PageTittle = styled.legend`
    color: ${({theme})=> theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 10px;
`

export const ApodTittle = styled.h4`
    color: ${({theme})=> theme.colors.text};
    padding: 10px;
    margin-bottom: 10px;
`

export const StyledList = styled.ul`

    li {
        margin-bottom: 3px;

    }
`

export const MediaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const NasaImage= styled.img`
    max-height: 100%;
    max-width: 100%;
    border-radius: 8px;
    margin: 0 auto;

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
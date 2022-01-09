import styled from "styled-components";

export const ApodContainer = styled.div`
    background: ${({theme})=> theme.glassBase};
    backdrop-filter: blur(20px);
    box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
    border-radius: 8px;
    width: 95%;

`

export const InfoContainner = styled.div`
    background: ${({theme})=> theme.primary};
    border-radius: 8px 8px 0px 0px;
`

export const PageTittle = styled.legend`
    color: ${({theme})=> theme.text};
    font-size: 1.5rem;
    font-weight: bold;
    padding: 5px;
    
`

export const ApodTittle = styled.h4`
    color: ${({theme})=> theme.text};
    margin-bottom: 5px;
`

export const StyledList = styled.ul`

    li {
    margin-bottom: 3px;

    }
`

export const NasaImage= styled.img`
    max-height: 100vh;
    max-width: 90%;
    border-radius: 8px;
    margin: 0 auto;
`

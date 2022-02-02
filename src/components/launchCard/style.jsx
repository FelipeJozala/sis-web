import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    margin: 1rem;
    background: ${({theme})=>theme.glassBase.background};
    box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
    backdrop-filter: ${({theme})=> theme.glassBase.backdropFilter};
    -webkit-backdrop-filter: ${({theme})=> theme.glassBase.webkitFilter};
    border: ${({theme})=> theme.glassBase.border};
    border-radius: 8px;

    @media only screen and (min-width: 768px) {
        display: flex;
        border-radius: 8px;
        padding: 1rem;
        height: 200px;
        width: 100%;
    }
`

export const ImgContainner = styled.div`
    overflow: hidden;
    width: fit-content;
    height: fit-content;
`

export const CardImage = styled.img`
    position: relative;
    width: 100%;
    border-radius: 8px 8px 0px 0px;

    @media only screen and (min-width: 768px) {
        border-radius: 50%;
        padding: 1rem;
        height: 170px;
        width: 170px;
    }
`
export const ConfirmationStatus = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background:${props => props.status === 'Go' ? 'green' : 'red' };
    padding: 10px;
    border-radius: 8px;
    font-weight: bold;

    @media only screen and (min-width: 768px) {
        top: unset;
        bottom: 0;
    }

`

export const CardInfo = styled.div`
    width: 100%;
    height: 300px;
    padding: 1rem 0.3rem;
    text-align: center;

    @media only screen and (min-width: 768px) {
        margin-left: 50px;
        text-align: left;
        width: 70%;
        height: fit-content;
    }
`
export const MissionTittle = styled.h4`
    color:${({theme})=> theme.colors.text};
    font-weight: 900;
    margin-bottom: 1rem;

`
export const InfoList = styled.ul`
    
    li {
        color:${({theme})=> theme.colors.text};
        margin: 10px 0;
    }
`

import styled from "styled-components";     

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${({theme})=>theme.glassBase.background};
    box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
    backdrop-filter: ${({theme})=> theme.glassBase.backdropFilter};
    -webkit-backdrop-filter: ${({theme})=> theme.glassBase.webkitFilter};
    border: ${({theme})=>theme.glassBase.border};
    border-radius: 8px;
    padding: 10px;
    margin: 20px 0;

    :hover {
        cursor: pointer;
        filter: grayscale(80%);
    }
    

`
export const ImgContainner = styled.div`
    width: 100% ;

`

export const BannerImage = styled.img`
    max-width: 100%;
    border-radius: 8px;

`

export const TextContainner = styled.div`
    padding: 15px;
    height: fit-content;

`

export const BannerTittle = styled.h3`
    color: ${({theme})=> theme.colors.text};
    margin-bottom: 15px;
    
    @media only screen and (min-width: 768px) {
        text-align: left;
    }
`
import styled from "styled-components";

export const GridContainer = styled.div`

    width: 100%;

    @media screen and (min-width:769px) and (max-width: 1023px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
        gap: 20px;
    }
    

    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        gap: 70px;
    }
    
`

export const GridCard = styled.div`
    height: 300px;
    background: ${({theme})=>theme.glassBase.background};
    box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
    backdrop-filter: ${({theme})=> theme.glassBase.backdropFilter};
    -webkit-backdrop-filter: ${({theme})=> theme.glassBase.webkitFilter};
    border: ${({theme})=>theme.glassBase.border};
    border-radius: 8px;
    
`
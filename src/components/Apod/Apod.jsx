import React from 'react'
import Image from "next/image";
import { ApodContainer,
        InfoContainner, 
        PageTittle,
        ApodTittle ,
        NasaImage, 
        StyledList} from './styles';

const Apod = ({img}) => {
    return (
        <ApodContainer src={img.hdurl} alt={img.title}>
        <InfoContainner>
        <PageTittle>Imagem do Dia</PageTittle>
            <ApodTittle>{img.title}</ApodTittle>
             <StyledList>
                <li>Data: {img.date}</li>
                <li>Imagem por: {img.copyright}</li>
            </StyledList>
        </InfoContainner >          
        <NasaImage src={img.hdurl} alt={img.title} />
        </ApodContainer>
        
    )
}

export default Apod
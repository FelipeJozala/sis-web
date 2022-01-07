import React from 'react'
import Image from "next/image";
import { ApodFieldSet, 
        PageTittle,
        ApodTittle ,
        NasaImage, 
        StyledList} from './styles';

const Apod = ({img}) => {
    return (
        <ApodFieldSet>
            <PageTittle>Imagem do Dia</PageTittle>
            <ApodTittle>{img.title}</ApodTittle>
             <StyledList>
                <li>Data: {img.date}</li>
                <li>Imagem por: {img.copyright}</li>
            </StyledList>
        <NasaImage src={img.hdurl} alt={img.title} />
        </ApodFieldSet>
    )
}

export default Apod
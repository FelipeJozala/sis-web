import React from 'react'
import Image from "next/image";
import { ApodTittle , NasaImage } from './styles';

const Apod = ({img}) => {
    return (
        <>
            <ApodTittle>Imagem do Dia</ApodTittle>
            <p><strong>{img.title}</strong></p>
             <ul>
                <li>Data: {img.date}</li>
                <li>Imagem por: {img.copyright}</li>
            </ul>
        <NasaImage src={img.hdurl} alt={img.title} />
        </>
    )
}

export default Apod
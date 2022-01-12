import React, { useState } from 'react'
import { ApodContainer,
        InfoContainner, 
        PageTittle,
        ApodTittle ,
        NasaImage,
        VideoFrame, 
        StyledList,
        MediaContainer } from './styles';

const Apod = ({img}) => {


    const [ apodInfo , setApodInfo ] = useState(false)
    
    const mediaType = img.media_type
    
    console.log(img)

    return (
        <ApodContainer>
            <MediaContainer>
                {mediaType === 'image' ? <NasaImage src={img.hdurl} alt={img.title} /> : <VideoFrame src={img.url}  width="100%" height="100%" frameBorder='0' allow='encrypted-media' allowFullScreen/> }      
            </MediaContainer>
            <InfoContainner>
                <ApodTittle>{img.title}</ApodTittle>
                <StyledList>
                    <li>Data: {img.date}</li>
                    <li>Imagem por: {img.copyright}</li>
                </StyledList>
            </InfoContainner>
        </ApodContainer>
    )
}

export default Apod
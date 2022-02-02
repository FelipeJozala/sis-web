import React from 'react'
import { Banner, BannerImage, BannerTittle, ImgContainner, TextContainner } from './style'

const GridBanner = ({eventInfo}) => {
    return (
        <Banner>
            <ImgContainner>
                <BannerImage src={eventInfo.feature_image} alt="Imagem da NASA"/>
            </ImgContainner>
                <TextContainner>
                    <BannerTittle>{eventInfo.name}</BannerTittle>
                </TextContainner>
        </Banner>
    )
}

export default GridBanner
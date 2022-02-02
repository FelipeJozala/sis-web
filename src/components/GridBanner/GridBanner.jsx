import React from 'react'
import { Banner, BannerImage, BannerTittle, ImgContainner, TextContainner } from './style'

const GridBanner = ({ img,title }) => {
    return (
        <Banner>
            <ImgContainner>
                <BannerImage src={img} alt="Imagem da NASA"/>
            </ImgContainner>
                <TextContainner>
                    <BannerTittle>{title}</BannerTittle>
                </TextContainner>
        </Banner>
    )
}

export default GridBanner
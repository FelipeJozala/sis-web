import Link from 'next/link'
import React from 'react'
import { Banner, BannerImage, BannerTittle, TextContainner } from './style'

const IndexBanner = () => {
    return (
        <Link href='/apod'>
        
        <Banner>
            <BannerImage src="https://www.nasa.gov/sites/default/files/11572307115_1194957269_o.jpg" alt="Imagem da NASA" srcset="https://www.nasa.gov/sites/default/files/11572307115_1194957269_o.jpg" />
            <a>
                <TextContainner>
                    <BannerTittle>Descubra o Cosmos!</BannerTittle>
                    <p>
                        Todo dia, uma imagem ou fotografia diferente do nosso 
                        fascinante universo escolhida diretamente pela NASA!
                    </p>
                </TextContainner>
            </a>
        </Banner>
        </Link>
    )
}

export default IndexBanner
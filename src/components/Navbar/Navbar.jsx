import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import { BurgueMenu,
         LeftContainer,
          NavContainer,
           RightContainer,
           LinkContainer,
            DesktopBrandContainer,
            MobileBrandContainer,
            MobileMenu } from './styles'
import brandlogo from '../../assets/brandlogo.png'


const Navbar = () => {

    const burguerIcon = <>&#8801;</>
    const closeIcon = <>&#10005;</>

    const [ mobileMenu, setMobileMenu ] = useState(false)

    const handleMobileToggle = () => {
        setMobileMenu(!mobileMenu)
    }


    return (
        <>
            <NavContainer>
                <LeftContainer>
                    <DesktopBrandContainer>
                        <Image 
                            width={50}
                            height={50}
                            layout='fixed'
                            src={brandlogo} alt="SIS Web Logo" />
                        </DesktopBrandContainer>
                    <Link href="/"><LinkContainer>Pagina Inicial</LinkContainer></Link>
                    <Link href="/apod"><LinkContainer>Imagem do Dia</LinkContainer></Link>
                </LeftContainer>
                <RightContainer>
                    <BurgueMenu onClick={handleMobileToggle}>{mobileMenu ? closeIcon : burguerIcon}</BurgueMenu>
                    <MobileBrandContainer>
                        <Image 
                            width={50}
                            height={50}
                            layout='fixed'
                            src={brandlogo} alt="SIS Web Logo" />
                        </MobileBrandContainer>
                </RightContainer>  
            </NavContainer>
            <MobileMenu menuToggle ={mobileMenu}>
                        <Link href="/" >
                            <a onClick={handleMobileToggle}><LinkContainer>Pagina Inicial</LinkContainer></a>
                        </Link>
                    <Link href="/apod">
                        <a onClick={handleMobileToggle}><LinkContainer>Imagem do Dia</LinkContainer></a>
                    </Link>
            </MobileMenu>
        </>
    )
}

export default Navbar
import Link from 'next/link'
import React, { useState } from 'react'
import { BurgueMenu, LeftContainer, NavContainer, RightContainer, Brand, MobileMenu } from './styles'
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
                    <Link href="/">Pagina Inicial</Link>
                    <Link href="/apod">Imagem do Dia</Link>
                </LeftContainer>
                <RightContainer>
                    <BurgueMenu onClick={handleMobileToggle}>{mobileMenu ? closeIcon : burguerIcon}</BurgueMenu>
                    <Brand 
                        width={50}
                        height={50}
                        src={brandlogo} alt="SIS Web Logo" />
                </RightContainer>  
            </NavContainer>
            <MobileMenu menuToggle ={mobileMenu}>
                    <Link href="/" >
                        <a onClick={handleMobileToggle}>Pagina Inicial</a>
                    </Link>
                    <Link href="/apod">
                        <a onClick={handleMobileToggle}>Imagem do Dia</a>
                    </Link>
            </MobileMenu>
        </>
    )
}

export default Navbar
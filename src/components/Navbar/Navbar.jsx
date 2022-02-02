import Link from 'next/link'
import React, { useState } from 'react'
import {
        NavContainer, 
        BurgueMenu,
        DesktopNav,
        MobileNav,
        LinkContainer,
        MobileMenu } from './styles'


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
                <DesktopNav>
                    <Link href="/"><LinkContainer>Home</LinkContainer></Link>
                    <Link href="/apod"><LinkContainer>Imagem do Dia</LinkContainer></Link>
                    <Link href="/launch"><LinkContainer>Lançamentos</LinkContainer></Link>
                </DesktopNav>
                <MobileNav>
                    <BurgueMenu onClick={handleMobileToggle}>{mobileMenu ? closeIcon : burguerIcon}</BurgueMenu>
                </MobileNav>  
            </NavContainer>
            <MobileMenu menuToggle ={mobileMenu}>
                <Link href="/" >
                    <a onClick={handleMobileToggle}><LinkContainer>Pagina Inicial</LinkContainer></a>
                </Link>
                <Link href="/apod">
                    <a onClick={handleMobileToggle}><LinkContainer>Imagem do Dia</LinkContainer></a>
                </Link>
                <Link href="/launch">
                    <a onClick={handleMobileToggle}><LinkContainer>Launch</LinkContainer></a>
                </Link>
            </MobileMenu>
        </>
    )
}

export default Navbar
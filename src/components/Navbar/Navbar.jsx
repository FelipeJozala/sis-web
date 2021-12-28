import React from 'react'
import { BurgueMenu, LeftContainer, NavContainer, RightContainer } from './styles'


const Navbar = () => {
    return (
        <NavContainer>
            <LeftContainer>
                <img src="/" alt="Logo" />
                <BurgueMenu>&#8801;</BurgueMenu>
            </LeftContainer>
            <RightContainer>right</RightContainer>
        </NavContainer>
    )
}

export default Navbar
import React from 'react';
import { Logo, HeaderContainer } from './styles';
import logo from '../../assets/logo.png';

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={logo} alt="Pitu - Encurtador de URL" />
                <h1>Pitu</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header;
import React from 'react';
import { HeaderWrapper, Title, Nav, NavLink } from './Header.styles.jsx';

function Header() {
  return (
    <HeaderWrapper>
      <Title>Meu Site</Title>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

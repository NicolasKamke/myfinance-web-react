import React from 'react';
import { HeaderWrapper, Title, Nav, NavLink } from './Header.styles.jsx';

function Header() {
  return (
    <HeaderWrapper>
      <Title>My Finance</Title>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/AccountPlan">Plano de Contas</NavLink>
        <NavLink href="/FinancialTransactions">Transações Financeiras</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

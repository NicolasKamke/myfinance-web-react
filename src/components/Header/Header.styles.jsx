import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5em;
`;

export const Nav = styled.nav`
  margin-top: 10px;
`;

export const NavLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

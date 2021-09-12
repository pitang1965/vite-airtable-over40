import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styled/StyledLink';
const Menu = styled.nav`
  & ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
`;

const Navbar = () => {
  return (
    <Menu>
      <ul>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/about'>About</StyledLink>
        </li>
      </ul>
    </Menu>
  );
};

export default Navbar;

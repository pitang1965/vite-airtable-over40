import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styled/StyledLink';
import { useAuth0 } from '@auth0/auth0-react';
import useTheme from '../hooks/useTheme';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Menu = styled.nav`
  & ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    align-items: center;
  }
`;

const Navbar = ({ toggleTheme }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Menu>
      <ul>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/workshop'>Workshop</StyledLink>
        </li>
        <li>
          <StyledLink to='/about'>About</StyledLink>
        </li>
        {!isAuthenticated && (
          <li>
            <LoginButton />
          </li>
        )}
        {isAuthenticated && (
          <li>
            <LogoutButton />
          </li>
        )}
        <li>
          <button onClick={toggleTheme}>テーマ切り替え</button>
        </li>
      </ul>
    </Menu>
  );
};

export default Navbar;
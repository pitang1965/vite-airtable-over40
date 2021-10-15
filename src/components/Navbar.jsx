import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styled/StyledLink';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { StyledButtonChangeTheme } from '../styled/StyledButton';

const Menu = styled.nav`
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    align-items: center;
  }
`;

const ImageContainer = styled.img`
  border-radius: 50%;
  padding: 5px;
`;

const Navbar = ({ toggleTheme }) => {
  const { isAuthenticated, user } = useAuth0();
  console.log(user);

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
          <StyledButtonChangeTheme onClick={toggleTheme}>
            テーマ切替
          </StyledButtonChangeTheme>
        </li>
        {isAuthenticated && (
          <li>
            <ImageContainer src={user.picture} alt={user.name} />
          </li>
        )}
      </ul>
    </Menu>
  );
};

export default Navbar;

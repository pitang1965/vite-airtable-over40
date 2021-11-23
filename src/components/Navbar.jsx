import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styled/StyledLink';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { StyledButtonChangeTheme } from '../styled/StyledButton';
import useAuth from '../hooks/useAuth';

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
  const { isMember, userName, userPicture, role } = useAuth();

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
        {!isMember && (
          <li>
            <LoginButton />
          </li>
        )}
        {isMember && (
          <li>
            <LogoutButton />
          </li>
        )}
        <li>
          <StyledButtonChangeTheme onClick={toggleTheme}>
            テーマ切替
          </StyledButtonChangeTheme>
        </li>
        {isMember && (
          <li>
            <ImageContainer src={userPicture} alt={userName} />
          </li>
        )}
        <li>{userName}</li>
        <li>{role}</li>
      </ul>
    </Menu>
  );
};

export default Navbar;

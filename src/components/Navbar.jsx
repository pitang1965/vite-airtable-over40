import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styled/StyledLink';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { StyledButtonChangeTheme } from '../styled/StyledButton';
import {
  getPermissionsFromToken,
  isAdmin,
  isOrdinaryMember,
  isNoRole,
} from '../util/permission';

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
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');
  useEffect(async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      console.table(getPermissionsFromToken(token));
      setUserName(user?.name);
      if (isAdmin(token)) {
        setRole('管理者');
      } else if (isOrdinaryMember(token)) {
        setRole('一般メンバ');
      } else if (isNoRole(token)) {
        setRole('メンバ登録未完了');
      } else {
        setRole('不明なロール');
      }
    } else {
      setUserName('未ログイン');
      setRole('');
    }
  }, [user]);

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
        <li>{userName}</li>
        <li>{role}</li>
      </ul>
    </Menu>
  );
};

export default Navbar;

import React from 'react';
import useAuth from '../hooks/useAuth';
import { StyledButton } from '../styled/StyledButton';

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin })}>
      ログアウト
    </StyledButton>
  );
};

export default LogoutButton;

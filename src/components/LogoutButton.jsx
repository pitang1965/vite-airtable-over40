import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledButton } from '../styled/StyledButton';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin })}>
      ログアウト
    </StyledButton>
  );
};

export default LogoutButton;

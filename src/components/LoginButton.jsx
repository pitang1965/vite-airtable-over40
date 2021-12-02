import React from 'react';
import useAuth from '../hooks/useAuth';
import { StyledButton } from '../styled/StyledButton';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth();
  return (
    <StyledButton onClick={() => loginWithRedirect()}>ログイン</StyledButton>
  );
};

export default LoginButton;

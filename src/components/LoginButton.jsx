import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledButton } from '../styled/StyledButton';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <StyledButton onClick={() => loginWithRedirect()}>ログイン</StyledButton>;
};

export default LoginButton;

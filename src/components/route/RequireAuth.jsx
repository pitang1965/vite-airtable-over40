import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    children
  ) : (
    <div>
      <p>Twitter認証及び管理者によるパーミッションの付与がされていないとこのページは見ることができません。</p>
      <LoginButton />
    </div>
  );
};

export default RequireAuth;

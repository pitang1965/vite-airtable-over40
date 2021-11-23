import React from 'react';
import useAuth from '../../hooks/useAuth';
import LoginButton from '../LoginButton';

const RequireAuth = ({ children }) => {
  const { isMember } = useAuth();
  return isMember ? (
    children
  ) : (
    <div>
      <p>
        Twitter認証及び管理者によるパーミッションの付与がされていないとこのページは見ることができません。
      </p>
      <LoginButton />
    </div>
  );
};

export default RequireAuth;

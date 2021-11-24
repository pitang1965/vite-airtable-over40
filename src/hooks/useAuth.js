import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { roleAtom } from '../atoms/auth';
import { useAuth0 } from '@auth0/auth0-react';
import { isAdmin, isOrdinaryMember, isNoRole } from '../utils/permission';

const useAuth = () => {
  const { isAuthenticated:isAuth0Authenticated, user, getAccessTokenSilently } = useAuth0();
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState(null);
  const [role, setRole] = useAtom(roleAtom);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMember, setIsMember] = useState(false);

  useEffect(async () => {
    if (isAuth0Authenticated) {
      setIsAuthenticated(true);
      const token = await getAccessTokenSilently();
      setUserName(user?.name);
      setUserPicture(user?.picture);
      if (isAdmin(token)) {
        setRole('管理者');
      } else if (isOrdinaryMember(token)) {
        setRole('一般メンバ');
      } else if (isNoRole(token)) {
        setRole('メンバ登録未完了');
      } else {
        setRole('不明なロール');
      }

      setIsMember(role === '管理者' || role === '一般メンバ');
    } else {
      setIsAuthenticated(false);
      setUserName('未ログイン');
      setRole('');
      setIsMember(false);
    }
  }, [role, user]);

  return { isAuthenticated, isMember, userName, userPicture, role };
};

export default useAuth;

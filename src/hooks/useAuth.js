import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { roleAtom } from '../atoms/auth';
import { useAuth0 } from '@auth0/auth0-react';
import { isAdmin, isOrdinaryMember, isNoRole } from '../utils/permission';

const useAuth = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState(null);
  const [role, setRole] = useAtom(roleAtom);
  const [isMember, setIsMember] = useState(false);

  useEffect(async () => {
    if (isAuthenticated) {
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
      setUserName('未ログイン');
      setRole('');
      setIsMember(false);
    }
  }, [role, user]);

  return { isMember, userName, userPicture, role };
};

export default useAuth;

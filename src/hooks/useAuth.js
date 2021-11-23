import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { roleAtom } from '../atoms/auth';
import { useAuth0 } from '@auth0/auth0-react';

const useAuth = () => {
  const { isAuthenticated } = useAuth0();
  const [role] = useAtom(roleAtom);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setIsMember(role === '管理者' || role === '一般メンバ');
    } else {
      setIsMember(false);
    }
  }, [role]);

  

  return { isMember };
};

export default useAuth;

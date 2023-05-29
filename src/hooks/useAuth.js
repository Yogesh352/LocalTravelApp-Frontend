import { useEffect, useState } from 'react';
import { VITE_BACKEND_URL } from '../config/constants';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}/userinfo`, {
      credentials: 'include',
    })
      .then(async (r) => await r.json())
      .then((data) => {
        setIsLoading(false);
        setUser(data);
      })
      .catch(() => {
        setIsLoading(false);
        setUser(null);
      });
  }, []);

  return {
    isLoading,
    user,
  };
};

export { useAuth };

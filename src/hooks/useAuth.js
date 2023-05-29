import { useEffect, useState } from 'react';
import { VITE_BACKEND_URL } from '../config/constants';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function login () {
    // Perform your login logic here
    // Once the user is successfully logged in, update the isLoggedIn state to true
    setIsLoggedIn(true);
    // Set the logged-in user data
    setUserName({ name: 'John Doe', email: 'johndoe@example.com' });
  };

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
    login,
    userName
  };
};

export { useAuth };

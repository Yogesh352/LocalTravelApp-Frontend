import { Button } from '@opengovsg/design-system-react';
import { useCallback, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { VITE_BACKEND_URL } from '../config/constants';
import { COLOURS } from '../theme/colours';

export const LogOutButton = ({
  buttonText = 'Log out',
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    setIsLoading(true);
    fetch(`${VITE_BACKEND_URL}/logout`, {
      credentials: 'include',
    })
      .then(() => {
        localStorage.clear();
        window.location.reload();
      })
      .catch((e) => {
        setIsLoading(false);
        console.error('Something went wrong while logging out', e);
      });
  }, []);

  return (
    <Button
      onClick={handleLogout}
      bgColor={COLOURS.PRIMARY}
      color="white"
      isLoading={isLoading}
    >
      {buttonText}
    </Button>
  );
};

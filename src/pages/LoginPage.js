import { Text, Group, TextInput } from "@mantine/core";
import React from "react";
import { LogoIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  HStack,
  Image,
  Spinner,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { Button, FormLabel, Radio } from '@opengovsg/design-system-react'
import { useCallback, useMemo, useState } from 'react'
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import sgidLogo from '../assets/logo.png'
import singpassLogo from '../assets/singpass.svg'
import { COLOURS } from '../theme/colours'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { VITE_BACKEND_URL } from '../config/constants'

const IceCreamOptions = {
  Vanilla: 'Vanilla',
  Chocolate: 'Chocolate',
  Strawberry: 'Strawberry',
};

const LoginPage = () => {
  let navigate = useNavigate();

  const [iceCream, setIceCream] = useState('Vanilla');
  const iceCreamFieldId = useMemo(() => 'icecream', []);
  const handleIceCreamSelection = useCallback((value) => {
    setIceCream(value);
  }, []);

  // Button loading state
  const [isLoading, setIsLoading] = useState(false)

  // Button click handler
  const handleLoginBtnClick = useCallback(() => {
    setIsLoading(true);
    fetch(`${VITE_BACKEND_URL}/auth-url?icecream=${iceCream}`, {
      credentials: 'include',
    })
      .then(async (r) => await r.json())
      .then(({ url }) => {
        window.location.href = url;
      })
      .catch((e) => {
        setIsLoading(false);
        console.error('Something went wrong while fetching the authorization URL:', e);
      });
  }, [iceCream]);

  const { user, isLoading: isUserLoading } = useAuth()

  if (isUserLoading) {
    return <Spinner />
  }
  if (user !== null) {
    return <Navigate to="/" />
  }

  return (
    <Stack className="h-1/3 w-1/4">
      <Group spacing="xs" className="cursor-pointer ml-[25%]">
        <LogoIcon className="text-white text-3xl" />
        <Text className="font-bold text-white text-3xl">LocalTravel</Text>
      </Group>
      <Box className="bg-white h-full w-full p-4 rounded-lg">
        <TextInput placeholder="Username" label="Username" withAsterisk />
        <TextInput placeholder="Password" label="Password" withAsterisk />
        <Button
          onClick={() => {
            navigate("redirect");
          }}
          className="bg-black text-white mt-4 w-[25%] ml-[75%]"
        >
          Login
        </Button>
      </Box>
      ;
      <VStack spacing="48px">
        <HStack spacing="48px" justifyContent={'center'}>
          <Box w="30%">
            <Image src={sgidLogo} w="100%" />
          </Box>
          <Box w="40%">
            <Image src={singpassLogo} w="100%" />
          </Box>
        </HStack>
        <Button
          onClick={handleLoginBtnClick}
          bgColor={COLOURS.PRIMARY}
          color="white"
          isLoading={isLoading}
        >
          Login with Singpass app
        </Button>
      </VStack>
    </Stack>

  );
};

export default LoginPage;


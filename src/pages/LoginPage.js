import { Box, Text, Group, Stack, TextInput, Button } from "@mantine/core";
import React from "react";
import { LogoIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  HStack,
  Image,
  Spinner,
  VStack,
} from '@chakra-ui/react'
import {FormLabel, Radio } from '@opengovsg/design-system-react'
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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();

  const handleLogin = () => {
    // Create a JSON payload with email and password
    const payload = {
      email: email,
      password: password
    };

    fetch("http://127.0.0.1:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        if (data.session_id) {
          // Login successful, navigate to the redirect page
          // Login successful, navigate to the redirect page
          localStorage.setItem("user_id", data.user_id);
          localStorage.setItem("user_email", data.user_email);
          localStorage.setItem("session_id", data.session_id);
          console.log(data.user_id, data.user_email, data.session_id)
        } else {
          // Login failed, handle the error
          console.error("Login error:", data.error);
        }
        navigate('/');
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
      login();
  };

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
        <TextInput
          placeholder="Email"
          label="Email"
          withAsterisk
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <TextInput
          placeholder="Password"
          label="Password"
          withAsterisk
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button
          onClick={handleLogin}
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

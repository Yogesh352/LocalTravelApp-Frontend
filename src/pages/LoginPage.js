import { useState } from "react";
import { Box, Text, Group, Stack, TextInput, Button } from "@mantine/core";
import React from "react";
import { LogoIcon } from "../icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        } else {
          // Login failed, handle the error
          console.error("Login error:", data.error);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

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
    </Stack>
  );
};

export default LoginPage;

import { Box, Text, Group, Stack, TextInput, Button } from "@mantine/core";
import React from "react";
import { LogoIcon } from "../icons";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  let navigate = useNavigate();

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
          Sign Up
        </Button>
      </Box>
      ;
    </Stack>
  );
};

export default SignupPage;

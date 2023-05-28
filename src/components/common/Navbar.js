import React from "react";
import { Button, Group, Text, UnstyledButton } from "@mantine/core";
import { LogoIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <Group position="apart" className="pl-40 pr-40 pt-5 pb-5 bg-black">
      <Group
        spacing="xs"
        className="cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoIcon className="text-white text-xl" />
        <Text className="font-bold text-white text-xl">LocalTravel</Text>
      </Group>
      <Group spacing="xl">
        <Button
          onClick={() => {
            navigate("videos");
          }}
          className=" text-white font-semibold text-lg cursor-pointer"
        >
          Videos
        </Button>
        <Button
          onClick={() => {
            navigate("guides");
          }}
          className="text-white font-semibold text-lg cursor-pointer"
        >
          Tour Guides
        </Button>
        <Button
          onClick={() => {
            navigate("tours");
          }}
          className="text-white font-semibold  text-lg cursor-pointer"
        >
          Tours
        </Button>
      </Group>

      <Group>
        <Text
          className="text-white cursor-pointer "
          onClick={() => {
            navigate("login");
          }}
        >
          Log in
        </Text>
        <Button
          className="bg-gray-100 text-black"
          onClick={() => {
            navigate("signup");
          }}
        >
          Sign up
        </Button>
      </Group>
    </Group>
  );
};

export default Navbar;



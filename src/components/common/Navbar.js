import React from "react";
import { Button, Group, Text, UnstyledButton } from "@mantine/core";
import { LogoIcon } from "../../icons";
const Navbar = () => {
  return (
    <Group position="apart" className="pl-40 pr-40 pt-5 pb-5 bg-black">
      <Group spacing="xs">
        <LogoIcon className="text-white text-xl" />
        <Text className="font-bold text-white text-xl">LocalTravel</Text>
      </Group>
      <Group spacing="xl">
        <Button className=" text-white font-semibold text-lg cursor-pointer">
          Videos
        </Button>
        <Button className="text-white font-semibold text-lg cursor-pointer">
          Tour Guides
        </Button>
        <Button className="text-white font-semibold  text-lg cursor-pointer">
          Tours
        </Button>
      </Group>

      <Group>
        <Text className="text-white cursor-pointer ">Log in</Text>
        <Button className="bg-gray-100 text-black">Sign up</Button>
      </Group>
    </Group>
  );
};

export default Navbar;

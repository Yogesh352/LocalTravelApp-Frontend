import React from "react";
import { Button, Group, Text, UnstyledButton } from "@mantine/core";
import { LogoIcon } from "../../icons";
const Navbar = () => {
  return (
    <Group position="apart" className="pl-40 pr-40 pt-5 pb-5">
      <Group spacing="xs">
        <LogoIcon className="text-xl" />
        <Text className="font-bold text-xl">LocalTravel</Text>
      </Group>
      <Group spacing="xl">
        <Button className="font-semibold text-black text-lg cursor-pointer">
          Videos
        </Button>
        <Button className="font-semibold text-black text-lg cursor-pointer">
          Tour Guides
        </Button>
        <Button className="font-semibold text-black text-lg cursor-pointer">
          Tours
        </Button>
      </Group>

      <Group>
        <Text className="cursor-pointer ">Log in</Text>
        <Button variant="outline">Sign up</Button>
      </Group>
    </Group>
  );
};

export default Navbar;

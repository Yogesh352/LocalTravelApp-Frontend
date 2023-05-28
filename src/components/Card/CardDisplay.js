import React from "react";
import { Card, Image, Text, Box, Button, Group } from "@mantine/core";
import { LikeIcon } from "../../icons";

const CardDisplay = ({ image, title, description, likes }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="h-[350px]">
      <Card.Section>
        <Image src={image} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Group
          spacing="xs"
          className="py-1 px-2 border-gray-400 border-2 rounded-full"
        >
          <LikeIcon className="text-sm" />
          <span className="text-sm">{likes}</span>
        </Group>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>
    </Card>
  );
};

export default CardDisplay;



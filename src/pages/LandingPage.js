import { Box, Text, Stack, Group, Grid, Input } from "@mantine/core";
import React from "react";
import CardDisplay from "../components/Card/CardDisplay";
import Navbar from "../components/common/Navbar";
import { SearchIcon } from "../icons";
import tourguide1 from "../images/tourguide1.jpg";
import tourguide2 from "../images/tourguide2.png";
import tourguide3 from "../images/tourguide3.jpg";
import tourguide4 from "../images/tourguide4.jpg";
import discoverycenter from "../images/discoverycenter.jpg";
import thaitemple from "../images/thaitemple.jpg";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <>
      <Grid className="xl:h-2/3  h-full bg-black px-40 pt-10 rounded-b-lg">
        <Grid.Col className="h-full" span={6}>
          <Text className="text-white font-bold 2xl:text-3xl md:text-lg w-[240px] 2xl:w-[400px]">
            Immerse yourself in wonderful experiences with{" "}
            <span className="text-gray-400">locals</span>
          </Text>
          <Input
            className="w-1/2 mt-10"
            size="lg"
            radius="lg"
            icon={<SearchIcon />}
            placeholder="Find Locations"
          />
        </Grid.Col>

        <Grid.Col className="h-full" span={6}>
          <Grid className="h-full">
            <Grid.Col span={6} className="h-1/2">
              <img
                src={tourguide1}
                alt="logo"
                className="h-full w-full rounded-lg"
              />
            </Grid.Col>
            <Grid.Col span={6} className="h-1/2">
              <img
                src={tourguide2}
                alt="logo"
                className="h-full w-full rounded-lg"
              />
            </Grid.Col>
            <Grid.Col span={6} className="h-1/2">
              <img
                src={tourguide3}
                alt="logo"
                className="h-full w-full rounded-lg"
              />
            </Grid.Col>
            <Grid.Col span={6} className="h-1/2">
              <img
                src={tourguide4}
                alt="logo"
                className=" h-full w-full rounded-lg"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <Stack>
        <Box className=" px-40 pt-10 ">
          <Group position="apart">
            <Text className="text-black font-bold text-2xl">
              VIDEOS FOR <span className="text-gray-500">YOU</span>
            </Text>
            <Text
              onClick={() => {
                navigate("videos");
              }}
              className="text-gray-600  text-lg cursor-pointer"
            >
              View More
            </Text>
          </Group>
          <Grid className="mt-4">
            <Grid.Col span={4}>
              <CardDisplay
                image={
                  "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                }
                title={"Norway Fjord Adventure"}
                likes={50}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CardDisplay
                image={discoverycenter}
                title={"Singapore Discovery Center"}
                likes={50}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CardDisplay
                image={thaitemple}
                title={"Thai Temples"}
                likes={100}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Box className=" px-40 mt-10 ">
          <Group position="apart">
            <Text className="text-black font-bold text-2xl">
              TOURS FOR <span className="text-gray-500">YOU</span>
            </Text>
            <Text
              onClick={() => {
                navigate("tours");
              }}
              className="text-gray-600  text-lg cursor-pointer"
            >
              View More
            </Text>
          </Group>
          <Grid className="mt-4">
            <Grid.Col span={4}>
              <CardDisplay
                image={
                  "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                }
                title={"Norway Fjord Adventure"}
                likes={50}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CardDisplay
                image={thaitemple}
                title={"Thai Temples"}
                likes={100}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CardDisplay
                image={discoverycenter}
                title={"Singapore Discovery Center"}
                likes={50}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Box className=" px-40 pt-10">
          <Group position="apart">
            <Text className="text-black font-bold text-2xl">
              GUIDES FOR <span className="text-gray-500">YOU</span>
            </Text>
            <Text
              onClick={() => {
                navigate("guides");
              }}
              className="text-gray-600 cursor-pointer text-lg"
            >
              View More
            </Text>
          </Group>
          <Grid className="mt-4">
            <Grid.Col span={3}>
              <CardDisplay
                image={profile2}
                title={"Bob"}
                likes={50}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <CardDisplay
                image={profile1}
                title={"Tom"}
                likes={100}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <CardDisplay
                image={profile2}
                title={"Sam"}
                likes={50}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <CardDisplay
                image={profile1}
                title={"James"}
                likes={50}
                description={
                  "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                }
              />
            </Grid.Col>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default LandingPage;

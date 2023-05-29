import { Grid, Text, Input, Button, Box, Stack, Group } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CardDisplay from "../components/Card/CardDisplay";
import { videoData } from "../data/VideoData";
import { SearchIcon } from "../icons";
import tourguide1 from "../images/tourguide1.jpg";
import { useNavigate } from "react-router-dom";
import UploadPage from "./UploadPage";

const VideosPage = () => {
  let navigate = useNavigate();
  const [videosData, setvideosData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((response) => response.json())
      .then((data) => setvideosData(data))
      .then(console.log(console.log(videosData)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Grid className="xl:h-1/2  bg-black px-40 pt-10 rounded-b-lg">
        <Grid.Col className="h-full" span={6}>
          <Text className="text-white font-bold 2xl:text-3xl md:text-lg w-[240px] 2xl:w-[400px]">
            Dicover places with the power of
            <span className="text-gray-400"> videos</span>
          </Text>
          <Input
            className="w-1/2 mt-10"
            size="lg"
            radius="lg"
            icon={<SearchIcon />}
            placeholder="Find Videos For Locations"
          />
        </Grid.Col>
        <Grid.Col className="h-full" span={6}>
          <Grid className="h-full">
            <Grid.Col span={12} className="h-full ">
              <img
                src={tourguide1}
                alt="logo"
                className="h-full ml-[20%] w-[80%] rounded-lg"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <Stack>
        <Box className=" px-40 pt-10 ">
          <Group position="apart">
            <Text className="text-black font-bold text-2xl">
              TOP PICKS FOR <span className="text-gray-500">YOU</span>
            </Text>
            <Button
              className="bg-black text-white"
              onClick={() => {
                navigate("/uploadpage");
              }}
            >
              Upload Video
            </Button>
          </Group>
          <Grid className="mt-4">
            {videosData.map((video) => (
              <Grid.Col
                span={4}
                className="cursor-pointer"
                onClick={() => {
                  navigate("video", {
                    state: {
                      title: video.name,
                      image: video.p_link,
                      likes: video.thumb_up,
                      // description: video.description,
                      // profilePic: video.profilePic,
                      // tourGuide: video.tourGuide,
                      // dateStamp: video.dateStamp,
                      // views: video.views,
                      // comments: video.comments
                      videoId: video.id,
                    },
                  });
                }}
              >
                <CardDisplay
                  image={video.p_link}
                  title={video.name}
                  likes={video.thumb_up}
                  description={video.description}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
        <Box className=" px-40 pt-10 ">
          <Group position="apart">
            <Text className="text-black font-bold text-2xl">
              SINCE <span className="text-gray-500">YOU</span> SEARCHED "BALI"
            </Text>
          </Group>
          <Grid className="mt-4">
            {videosData.map((video) => (
              <Grid.Col span={4}>
                <CardDisplay
                  image={video.p_link}
                  title={video.name}
                  likes={video.thumb_up}
                  description={video.description}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default VideosPage;

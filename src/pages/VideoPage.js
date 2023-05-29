import { Grid, Box, Text, Stack, Avatar, Group, Button } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { redirect, useLocation } from "react-router-dom";
import { tourData } from "../data/TourData";
import { ThumbDownIcon, ThumbUpIcon } from "../icons";
import video from "../images/sampleVideo.mp4";
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const location = useLocation();
  const [likes, setLikes] = useState(location.state.likes);
  // const [videoBlob, setVideoBlob] = useState(null); // State to store video blob
  const [videoUrl, setVideoUrl] = useState(null); // State to store video URL
  let navigate = useNavigate();

  useEffect(() => {
    console.log(location.state.videoId)
    // Fetch and download the video using the provided ID or any relevant parameters
    fetchVideoFromAPI(location.state.videoId)
      .then((blob) => {
        setVideoBlob(blob);
        initiateDownload(blob);
      })
      .catch((error) => {
        console.error("Failed to fetch video:", error);
        // Handle error if necessary
      });
  }, [location.state.videoId]);

  const fetchVideoFromAPI = async (videoId) => {
    // Make an API request to fetch the video using the provided video ID
    // Replace 'API_ENDPOINT' with the actual API endpoint for fetching the video
    const response = await fetch(`http://localhost:5000/api/videos/download/${videoId}`);
    const blob = await response.blob();
    const videoUrl = URL.createObjectURL(blob);
    setVideoUrl(videoUrl);
  };

  return (
    <>
      <Grid className="xl:h-2/3 h-full bg-black px-40 pt-10 rounded-b-lg">
        {videoUrl && (
          <video className="h-full w-full" controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </Grid>
      <Box className=" px-40 pt-10 ">
        <Group position="apart">
          <Text className="font-bold text-2xl">{location.state.title}</Text>
          <Group>
            <Group spacing={0}>
              <Button
                variant="outline"
                leftIcon={<ThumbUpIcon />}
                size="md"
                color="dark"
                radius="xs"
                onClick={() => setLikes(likes + 1)}
              >
                {likes}
              </Button>
              <Button
                variant="outline"
                leftIcon={<ThumbDownIcon />}
                size="md"
                color="dark"
                radius="xs"
              ></Button>
            </Group>

            <Button
              variant="outline"
              size="md"
              color="dark"
              onClick={() => {
                navigate("tours/tour", {
                  replace: true,
                  state: {
                    name: tourData[0].name,
                    image: tourData[0].image,
                    description: tourData[0].description,
                    rating: tourData[0].rating,
                    keyHighlights: tourData[0].keyHighlights,
                    itenary: tourData[0].itenary,
                    reviews: tourData[0].reviews,
                  },
                });
              }}
            >
              Find out more
            </Button>
          </Group>
        </Group>
        <Group className="mt-4">
          <Avatar
            className="rounded-full"
            src={location.state.profilePic}
            alt="it's me"
          />
          <Text className="font-semibold text-lg">
            {location.state.tourGuide}
          </Text>
        </Group>
        <Box className="bg-gray-100 p-2 mt-6 rounded-md">
          <Group>
            <Text className="font-bold">{location.state.views} views</Text>
            <Text>{location.state.dateStamp}</Text>
          </Group>
          <Text>{location.state.description}</Text>
        </Box>
        <Box className="mt-6">
          <Text className="font-bold text-lg">Comments</Text>

          {/* {location.state.comments.map((comment) => (
            <Group className="mt-4">
              <Avatar
                src={comment.profilePic}
                alt=""
                className="rounded-full"
              />
              <Text>{comment.comment}</Text>
            </Group>
          ))} */}
        </Box>
      </Box>
    </>
  );
};

export default VideoPage;


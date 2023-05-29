import { Box, Text, Stack, Group, Grid, Input } from "@mantine/core";
import React, { useState, useEffect } from "react";
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
  const [videosData, setvideosData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((response) => response.json())
      .then((data) => setvideosData(data))
      .then(console.log(console.log(videosData)))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/tours');
      const data = await response.json();
      setTourData(data);
    } catch (error) {
      console.log('Error fetching tour data:', error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/users/admin")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

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
            {videosData.slice(0, 3).map((video) => (
              <Grid.Col
                span={4}
                className="cursor-pointer"
                onClick={() => {
                  navigate("videos/video", {
                    state: {
                      title: video.name,
                      image: video.p_link,
                      likes: video.thumb_up,
                      description: video.description,
                      // profilePic: video.profilePic,
                      // tourGuide: video.tourGuide,
                      dateStamp: video.created_at,
                      views: video.view_count,
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
            {tourData.slice(0, 3).map((tour) => (
              <Grid.Col
                span={4}
                className="cursor-pointer"
                onClick={() => {
                  navigate("tours/tour", {
                    state: {
                      id: tour.id,
                      name: tour.name,
                      image: tour.link,
                      description: tour.description,
                      rating: tour.rating,
                      // keyHighlights: tour.highlight,
                      // itenary: tour.itinerary,
                      // reviews: tour.comment,
                    },
                  });
                }}
              >
                <CardDisplay
                  image={tour.link}
                  title={tour.name}
                  likes={tour.rating}
                  description={tour.description}
                />
              </Grid.Col>
            ))}
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
            {userData.slice(0, 3).map((user) => (
              <Grid.Col span={4}
                className="cursor-pointer"
                key={user.id}
                onClick={() => {
                  navigate("guides/guide", {
                    state: {
                      id: user.id,
                      email: user.email,
                      name: user.name,
                      image: user.link,
                      languageSpoken: user.languageSpoken,
                      selfIntro: user.selfIntro,
                      // keyHighlights: tour.highlight,
                      // itenary: tour.itinerary,
                      // reviews: tour.comment,
                    },
                  });
                }}
              >
                <CardDisplay
                  image={user.link}
                  title={user.name}
                  likes={user.likes}
                  description={user.selfIntro}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default LandingPage;

import { Grid, Text, Input, Box, Group } from "@mantine/core";
import React, { useState, useEffect } from "react";
import CardDisplay from "../components/Card/CardDisplay";
import { tourData } from "../data/TourData";
import { SearchIcon } from "../icons";
import tourguide3 from "../images/tourguide3.jpg";
import { useNavigate } from "react-router-dom";

const ToursPage = () => {
  const [tourData, setTourData] = useState([]);
  const navigate = useNavigate();

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

  return (
    <>
      <Grid className="xl:h-1/2  h-full bg-black px-40 pt-10 rounded-b-lg">
        <Grid.Col className="h-full" span={6}>
          <Text className="text-white font-bold 2xl:text-3xl md:text-lg w-[240px] 2xl:w-[400px]">
            Be
            <span className="text-gray-400"> guided </span>to the beautiful
            places around the world
          </Text>
          <Input
            className="w-1/2 mt-10"
            size="lg"
            radius="lg"
            icon={<SearchIcon />}
            placeholder="Find Tours For Locations"
          />
        </Grid.Col>
        <Grid.Col className="h-full" span={6}>
          <Grid className="h-full">
            <Grid.Col span={12} className="h-full ">
              <img
                src={tourguide3}
                alt="logo"
                className="h-full ml-[20%] w-[80%] rounded-lg"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <Box className=" px-40 pt-10 ">
        <Group position="apart">
          <Text className="text-black font-bold text-2xl">
            TOP PICKS FOR <span className="text-gray-500">YOU</span>
          </Text>
        </Group>
        <Grid className="mt-4">
          {tourData.map((tour) => (
            <Grid.Col
              span={4}
              className="cursor-pointer"
              onClick={() => {
                navigate("tour", {
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
    </>
  );
};

export default ToursPage;


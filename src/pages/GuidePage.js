import {
    Stack,
    Grid,
    Box,
    Group,
    Text,
    Button,
    CheckIcon,
    Avatar,
  } from "@mantine/core";
  import React, { useState, useEffect } from "react";
  import { useLocation } from "react-router-dom";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import FormControl from "@mui/material/FormControl";
  import Select from "@mui/material/Select";
  import { ItenaryIcon } from "../icons";
  import { tourData } from "../data/TourData";
  
  const TourPage = () => {
    const location = useLocation();
    const [highlights, setHighlights] = useState([]);
    const [itineraries, setItineraries] = useState([]);
  
    useEffect(() => {
      if (location?.state?.id) {
        fetchHighlights(location.state.id);
        fetchItineraries(location.state.id);
      }
    }, [location?.state?.id]);
  
    // const fetchHighlights = async (tourId) => {
    //   try {
    //     const response = await fetch(
    //       `http://127.0.0.1:5000/api/tours/highlights/${tourId}`
    //     );
    //     const data = await response.json();
    //     setHighlights(data);
    //   } catch (error) {
    //     console.log("Error fetching highlights:", error);
    //   }
    // };
  
    // const fetchItineraries = async (tourId) => {
    //   try {
    //     const response = await fetch(
    //       `http://127.0.0.1:5000/api/tours/itineraries/${tourId}`
    //     );
    //     const data = await response.json();
    //     setItineraries(data);
    //   } catch (error) {
    //     console.log("Error fetching itineraries:", error);
    //   }
    // };
  
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack className="h-full px-40 pt-10">
          <Grid className="h-2/3">
            <Grid.Col span={8} className="h-full w-full">
              <img
                src={location?.state ? location?.state?.image : tourData[0].image}
                alt=""
                className="h-full w-full rounded-lg"
              />
            </Grid.Col>
            <Grid.Col span={4} className="h-full w-full">
              <Box className="border-2 border-gray-300 rounded-lg h-full w-full py-4 px-6">
                <Text className="font-bold text-xl mb-4">Book Now!</Text>
                <DatePicker label="Basic date picker" className="w-full" />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    No. Of Pax
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="No. Of Pax"
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  className="bg-black text-white mt-4 w-[50%] mx-[25%]"
                  size="md"
                >
                  Book
                </Button>
              </Box>
            </Grid.Col>
          </Grid>
          <Text className="text-3xl font-bold">
            {location?.state ? location?.state?.name : tourData[0].name}
          </Text>
          <Text>
            {location?.state ? location?.state?.description : tourData[0].description}
          </Text>
          <Text className="text-xl font-bold">Key Highlights</Text>
          { <Grid>
          {highlights.map((highlight) => (
            <Grid.Col span={6}>
              <Group>
                <CheckIcon className="h-4 w-4 text-red-500" />
                <Text>{highlight.highlight}</Text>
              </Group>
            </Grid.Col>
          ))}
          </Grid>}
          <Text className="text-xl font-bold">Itenary</Text>
          <Stack>
          {itineraries.map((item) => (
            <Grid className="w-[60%]">
              <Grid.Col span={1}>
                <ItenaryIcon className="text-lg mt-2 text-red-500" />
              </Grid.Col>
              <Grid.Col span={11}>
                <Text>{item.itinerary}</Text>
             </Grid.Col>
            </Grid>
          ))}
        <Text></Text>
        <Text></Text>
        <Text></Text>
          </Stack>
        </Stack>
      </LocalizationProvider>
    );
  };
  
  export default TourPage;
  
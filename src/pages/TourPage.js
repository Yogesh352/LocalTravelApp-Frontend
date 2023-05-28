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
  import React from "react";
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
          <Grid>
            {location?.state
              ? location?.state?.keyHighlights?.map((highlight) => (
                  <Grid.Col span={6}>
                    <Group>
                      <CheckIcon className="h-4 w-4 text-red-500" />
                      <Text>{highlight}</Text>
                    </Group>
                  </Grid.Col>
                ))
              : tourData[0].keyHighlights.map((highlight) => (
                  <Grid.Col span={6}>
                    <Group>
                      <CheckIcon className="h-4 w-4 text-red-500" />
                      <Text>{highlight}</Text>
                    </Group>
                  </Grid.Col>
                ))}
          </Grid>
          <Text className="text-xl font-bold">Itenary</Text>
          <Stack>
            {location?.state
              ? location?.state?.itenary.map((item) => (
                  <Grid className="w-[60%]">
                    <Grid.Col span={1}>
                      <ItenaryIcon className="text-lg mt-2 text-red-500" />
                    </Grid.Col>
                    <Grid.Col span={11}>
                      <Text className="font-semibold">{item.plan}</Text>
                      <Text className=" text-gray-600 mt-2">
                        {item.explanation}
                      </Text>
                    </Grid.Col>
                  </Grid>
                ))
              : tourData[0].itenary.map((item) => (
                  <Grid className="w-[60%]">
                    <Grid.Col span={1}>
                      <ItenaryIcon className="text-lg mt-2 text-red-500" />
                    </Grid.Col>
                    <Grid.Col span={11}>
                      <Text className="font-semibold">{item.plan}</Text>
                      <Text className=" text-gray-600 mt-2">
                        {item.explanation}
                      </Text>
                    </Grid.Col>
                  </Grid>
                ))}
          </Stack>
          <Text className="text-xl font-bold">Reviews</Text>
          <Stack>
            {location?.state
              ? location?.state?.reviews.map((review) => (
                  <Group className="mt-4">
                    <Avatar
                      src={review.profilePic}
                      alt=""
                      className="rounded-full"
                    />
                    <Text>{review.review}</Text>
                  </Group>
                ))
              : tourData[0].reviews.map((review) => (
                  <Group className="mt-4">
                    <Avatar
                      src={review.profilePic}
                      alt=""
                      className="rounded-full"
                    />
                    <Text>{review.review}</Text>
                  </Group>
                ))}
          </Stack>
        </Stack>
      </LocalizationProvider>
    );
  };
  
  export default TourPage;
  
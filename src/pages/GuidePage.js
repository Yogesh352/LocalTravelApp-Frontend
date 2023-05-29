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
  import coverImg from "../images/coverImage.jpg";

  
  const TourPage = () => {
    const location = useLocation();
    const [highlights, setHighlights] = useState([]);
    const [itineraries, setItineraries] = useState([]);
  
    useEffect(() => {
      if (location?.state?.id) {
      }
    }, [location?.state?.id]);

  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="profile">
        <div className="cover-image">
                <img src={coverImg} alt="Cover" />
            </div>
            <div className="profile-picture">
                <img src={location?.state?.image} alt="Profile" />
            </div>
            <h1 className="name"> {location?.state?.name} </h1>
            <h2 className="hello"> Hi there, it's nice to meet you! </h2>
            <p>{location?.state?.selfIntro} </p>
            <div className="info-section">
            <div className="info-item">
              <p className="icon">🌎</p>
              <p className="info-text">Languages Spoken:</p>
              {location?.state?.languageSpoken.split(",").map((language, index) => (
                <div key={index}>
                  <p className="info-text ">{language.trim() } </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </LocalizationProvider>
    );
  };
  
  export default TourPage;
  
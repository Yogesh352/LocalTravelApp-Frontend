import { Box } from "@mantine/core";
import React from "react";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  if (location.pathname.includes("signup")) {
    return (
      <Box className="flex items-center justify-center h-screen bg-black">
        {children}
      </Box>
    );
  } else if (location.pathname.includes("login")) {
    return (
      <Box className="flex items-center justify-center h-screen bg-black">
        {children}
      </Box>
    );
  } else {
    return (
      <div className="min-h-screen">
        <Box className="fixed bg-white top-0 z-[150]  bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </Box>

        <Box className=" h-screen py-4  pt-16 ">{children}</Box>
      </div>
    );
  }
};

export default Layout;


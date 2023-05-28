import { Box } from "@mantine/core";
import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Box className="fixed bg-white top-0 z-[150]  bg-main-bg dark:bg-main-dark-bg navbar w-full">
        <Navbar />
      </Box>

      <Box className="bg-gray-50 h-screen py-4  pt-16 ">{children}</Box>
    </div>
  );
};

export default Layout;

import { Box } from "@mantine/core";
import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Box className="fixed bg-white top-0 z-[150]  bg-main-bg dark:bg-main-dark-bg navbar w-full">
        <Navbar />
      </Box>

      <Box className="bg-gray-50 min-h-screen px-10 py-4 flex-1 pt-20 p-5 relative">
        {children}
      </Box>
    </>
  );
};

export default Layout;

import React from "react";
import Footer from "../footer";
import Header from "../header.jsx";

import {
  Box,
  Flex
} from "@chakra-ui/react";

const MainLayout = ({ children }) => {
  return (
    <Flex minH="100vh" direction="column">
      <Header/>
      <Box flex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
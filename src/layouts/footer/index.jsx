import React from "react";

import {
  Box,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      width="100%"
      bg='#F6F7F7'
      h="40px"
      px={10}
      display='flex'
      alignItems={"center"}
      justifyContent={"end"}
    >
      <p color="4B5C68">Api Version:</p>
    </Box>
  );
};

export default Footer;
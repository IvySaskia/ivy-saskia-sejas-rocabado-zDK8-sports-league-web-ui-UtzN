import React from "react";

import {
  Box,
  Image
} from '@chakra-ui/react'

const NoPage = () => {
  return (
    <Box
      alignItems={"center"}
      justifyContent={"center"}
      display='flex'
      py={16}
    >
      <Image
        src='/images/404.png'
        alt='404'
      />
    </Box>
  );
};

export default NoPage;
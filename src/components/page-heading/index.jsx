import React from "react";

import {    
  Center,
  Heading,
  Text
} from "@chakra-ui/react";

const PageHeading = ({ title }) => {
    return (   
      <Center>
        <Heading
          fontSize='24px'
          mt={"60px"}
          mb={"20px"}
          color={"#182C62"}
          alignContent={"center"}
        >
          {title}
        </Heading>
      </Center>
    );
};

export default PageHeading;
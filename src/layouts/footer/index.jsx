import React, { useEffect, useState } from "react";

import {
  Box,
} from "@chakra-ui/react";

import useApi from "../../hooks/useApi";

const Footer = () => {
  const [apiVersion, setApiVersion] = useState([]);
  const { getApiVersion } = useApi();

  const fetchData = async () => {
    const res = await getApiVersion();
    setApiVersion(res.version);
  };

  useEffect(() => {
    fetchData();
  },[]);
  
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
      <p color="4B5C68">
        Api Version: {apiVersion}
      </p>
    </Box>
  );
};

export default Footer;
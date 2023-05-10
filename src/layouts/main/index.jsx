import React, { useEffect, useContext } from "react";
import Footer from "../footer";
import Header from "../header/index.jsx";

import {
  Box,
  Flex
} from "@chakra-ui/react";

import useApi from "../../hooks/useApi";
import { GlobalContext } from "../../contexts/GlobalContext";

const MainLayout = ({ children }) => {
  const { getAccessToken } = useApi();
  const { storeToken } = useContext(GlobalContext);

  
  const fetchData = async () => {
    const res = await getAccessToken();
    storeToken(res.access_token);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Flex minH="100vh" direction="column">
      <Header/>
      <Box
        flex={1}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
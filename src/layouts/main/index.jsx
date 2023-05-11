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
  const { getAccessToken, getAllMatches } = useApi();
  const { storeToken, setMatches } = useContext(GlobalContext);

  
  const fetchData = async () => {
    let res = await getAccessToken();
    const { access_token } = res;
    storeToken(access_token);
    res = await getAllMatches(access_token);
    setMatches(res);
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
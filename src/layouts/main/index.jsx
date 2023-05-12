import React, { useEffect, useContext } from "react";
import Footer from "../footer";
import Header from "../header/index.jsx";

import {
  Box,
  Flex
} from "@chakra-ui/react";

import LeagueService from "../../services/LeagueService";
import { LeagueContext } from "../../contexts/LeagueContext";

const MainLayout = ({ children }) => {
  const { storeToken, setMatches, setLeaderboard } = useContext(LeagueContext);

  const fetchLeagueData = async () => {
    try {
      const leagueService = new LeagueService();
      await leagueService.fetchData();
      const matches = leagueService.getMatches();
      const leaderboard = leagueService.getLeaderboard();
      const token = leagueService.getAccessToken();
      storeToken(token);
      setLeaderboard(leaderboard);
      setMatches(matches);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchLeagueData();
  },[]);


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
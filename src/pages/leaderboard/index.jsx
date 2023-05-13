import React from "react";

import {
  Flex
} from "@chakra-ui/react";

import PageHeading from "../../components/page-heading";
import LeaderboardTable from "../../components/leaderboard-table";

const Leaderboard = () => {

  return (
    <Flex
      width="100%"
      bg="white"
      px={"5%"}
      direction={"column"}
    >
      <PageHeading title={"League Standings"} />
      <LeaderboardTable/>
    </Flex>
  );
};

export default Leaderboard;
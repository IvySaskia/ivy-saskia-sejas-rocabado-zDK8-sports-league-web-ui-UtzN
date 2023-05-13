import React, { useContext } from "react";

import { LeagueContext } from "../../contexts/LeagueContext";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Hide,
  Show
} from "@chakra-ui/react";

import Flag from "../flag";

const renderSwitchHeader = (h) => {
  switch (h) {
    case "Team Name":
      return <Th key={h}>{h}</Th>;
    case "GF":
      return (
        <Hide below="500px">
          <Th key={h} textAlign="center">{h}</Th>
        </Hide>
      );
    case "GA":
      return (
        <Hide below="500px">
          <Th key={h} textAlign="center">{h}</Th>
        </Hide>
      );
    case "GD":
      return (
        <Show below="500px">
          <Th key={h} textAlign="center">{h}</Th>
        </Show>
      );
    default:
      return <Th key={h} textAlign="center">{h}</Th>;
  }
};


const LeaderboardTable = () => {
  
  const headers = ['Team Name', 'MP', 'GF', 'GA', 'GD', 'Points'];
  
  const { state } = useContext(LeagueContext);
  const { allLeaderboad } = state;

  return (   
    <TableContainer>
      <Table
        w='100%'
      >
        <Thead>
          <Tr>{headers.map((h) => (
              <>{renderSwitchHeader(h)}</>
            ))}</Tr>
        </Thead>
        <Tbody>
          {allLeaderboad.map(({teamName, matchesPlayed, goalsFor, goalsAgainst, goalDifference, points}, index) => (
              <Tr key={index}>
                <Td width="55%">
                  <HStack justifyContent="left">
                    <Flag flagName={teamName} />
                    <p>{teamName}</p>
                  </HStack>
                </Td>
                <Td textAlign="center">{matchesPlayed}</Td>
                <Hide below="500px">
                  <Td textAlign="center">{goalsFor}</Td>
                  <Td textAlign="center">{goalsAgainst}</Td>
                </Hide>
                <Show below="500px">
                  <Td textAlign="center">{goalDifference}</Td>
                </Show>
                <Td textAlign="center">{points}</Td>
              </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTable;
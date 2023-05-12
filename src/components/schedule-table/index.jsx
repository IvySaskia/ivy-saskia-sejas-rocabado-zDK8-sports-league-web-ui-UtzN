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

} from "@chakra-ui/react";

import Flag from "../flag";

import Moment from 'moment';


const renderSwitchHeader = (h) => {
  switch(h) {
    case "Date/Time":
      return <Hide below="500px">
              <Th key={h} textAlign="right" width={"5%"}>{h}</Th>
            </Hide>;
    case "Stadim":
      return <Hide below="751px">
              <Th key={h}>{h}</Th>
            </Hide>;
    case "Home Team":
      return <Th key={h} textAlign="right">{h}</Th>;
    default:
      return <Th key={h}>{h}</Th>;
  }
};

const ScheduleTable = ({ title }) => {
  const headers = ['Date/Time', 'Stadim', 'Home Team', '', 'Away Team'];
  
  const { state } = useContext(LeagueContext);
  const { allMatches } = state;

    return (   
      <TableContainer>
        <Table
          w='100%'
          variant='customStriped'
        >
          <Thead>
            <Tr>{headers.map((h, index) => (
                <>{renderSwitchHeader(h)}</>
              ))}</Tr>
          </Thead>
          <Tbody>
            {allMatches.map(({ matchDate, stadium, homeTeam, homeTeamScore, awayTeamScore, awayTeam }, index) => (
              <Tr key={index}>
                <Hide below="500px">
                  <Td textAlign="right">
                    {Moment(matchDate).format('D.M.YYYY')}
                    <br />
                    {Moment(matchDate).format('hh:mm')}
                  </Td>
                </Hide>
                <Hide below="751px">
                  <Td>{stadium}</Td>
                </Hide>
                <Td>
                  <HStack justifyContent="right">
                    <p>{homeTeam}</p>
                    <Flag flagName={homeTeam} />
                  </HStack>
                </Td>
                <Td px="0" textAlign="center">
                  {homeTeamScore} : {awayTeamScore}
                </Td>
                <Td>
                  <HStack justifyContent="left">
                    <Flag flagName={awayTeam} />
                    <p>{awayTeam}</p>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
};

export default ScheduleTable;
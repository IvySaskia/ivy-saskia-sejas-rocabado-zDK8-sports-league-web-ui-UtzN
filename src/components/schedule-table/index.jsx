import React, { useContext } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";

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
              <Th key={h}>{h}</Th>
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

    const { state } = useContext(GlobalContext);
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
            {
              allMatches.map((m, index) => (
                <Tr key={index}>
                  <Hide below="500px">
                    <Td isNumeric>{Moment(m.matchDate).format('D.M.YYYY')}
                      <br /> {Moment(m.matchDate).format('hh:mm')}
                    </Td>
                    </Hide>
                  <Hide below="751px">
                    <Td>{m.stadium}</Td>
                  </Hide>
                  <Td>
                    <HStack justifyContent="right">
                      <p>{m.homeTeam}</p>
                      <Flag flagName={m.homeTeam} />
                    </HStack>
                  </Td>
                  <Td px="0" textAlign="center">{ m.homeTeamScore  } : { m.awayTeamScore }</Td>
                  <Td>
                    <HStack justifyContent="left">
                      <Flag flagName={m.awayTeam} />
                      <p>{m.awayTeam}</p>
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
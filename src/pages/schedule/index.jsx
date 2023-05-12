import React, { useContext } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";

import {
  Center,
  Flex,
  Heading,
  Image,
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

import Moment from 'moment';

const renderFlag = (flagName) => {
  return <Image
    src={getFlagByName(flagName)}
    alt={flagName}
    width="53px"
    height="37px"
  />
};

const getFlagByName = (flagName) => {
  return `https://flagsapi.codeaid.io/${flagName}.png`;
};

const renderSwitchHeader = (h) => {
  switch(h) {
    case "Date/Time":
      return <Hide below="500px">
              <Th key={h} textAlign="right"> {h} </Th>
            </Hide>;
    case "Stadim":
      return <Hide below="751px">
              <Th key={h}> {h} </Th>
            </Hide>;
    case "Home Team":
      return <Th key={h} textAlign="right"> {h} </Th>;
    default:
      return <Th key={h}> {h} </Th>;
  }
};

const Schedule = () => {
  const headers = ['Date/Time', 'Stadim', 'Home Team', '', 'Away Team'];

  const { state } = useContext(GlobalContext);
  const { allMatches } = state;
  
  return (
    <Flex
      width="100%"
      bg="white"
      px={"5%"}
      direction={"column"}
    >
      <Center>
        <Heading
          fontSize='24px'
          mt={"60px"}
          mb={"20px"}
          color={"#182C62"}
          alignContent={"center"}
        >
          League Schedule
        </Heading>
      </Center>

      <TableContainer>
        <Table
          w='100%'
          variant='customStriped'
        >
          <Thead>
            <Tr>
              {headers.map((h, index) => (
                <> {renderSwitchHeader(index, h)} </>
              ))}
            </Tr>
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
                      {renderFlag(m.homeTeam)}
                    </HStack>
                  </Td>
                  <Td px="0" textAlign="center">{ m.homeTeamScore  } : { m.awayTeamScore }</Td>
                  <Td>
                    <HStack justifyContent="left">
                      {renderFlag(m.awayTeam)}
                      <p>{m.awayTeam}</p>
                    </HStack>
                  </Td>
                </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Schedule;
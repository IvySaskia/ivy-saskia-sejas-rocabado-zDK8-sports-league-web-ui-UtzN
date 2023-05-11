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
  HStack
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
        >
          <Thead>
            <Tr>
              {headers.map((h, index) => (
                index === 2?
                  <Th
                    key={h}
                    textAlign="right"
                  >
                    {h}
                  </Th> :
                  <Th
                    key={h}
                  >
                    {h}
                  </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {
              allMatches.map((m, index) => (
                <Tr key={index}>
                  <Td isNumeric>{Moment(m.matchDate).format('D.M.YYYY')}
                    <br/> {Moment(m.matchDate).format('hh:mm')}</Td>
                  <Td>{ m.stadium  }</Td>
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
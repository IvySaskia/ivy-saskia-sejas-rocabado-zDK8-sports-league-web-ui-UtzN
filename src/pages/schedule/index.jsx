import React, { useContext } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";

import {
  Center,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

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
              {headers.map((h) => (
                <Th key={h}>{h}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {
              allMatches.map((m, index) => (
                <Tr>
                  <Td>{ index}{ m.matchDate }</Td>
                  <Td>{ m.stadium  }</Td>
                  <Td>{ m.homeTeam  }</Td>
                  <Td>{ m.homeTeamScore  } : { m.awayTeamScore }</Td>
                  <Td>{m.awayTeam}</Td>
                </Tr>
            ))}

            {/* <Tr>
              <Td>5.5.2022</Td>
              <Td>Macarana</Td>
              <Td>Brazil</Td>
              <Td>1 : 0</Td>
              <Td>Serbia</Td>
            </Tr>
            <Tr>
              <Td>5.5.2022</Td>
              <Td>Macarana</Td>
              <Td>Brazil</Td>
              <Td>1 : 0</Td>
              <Td>Serbia</Td>
            </Tr>
            <Tr>
              <Td>5.5.2022</Td>
              <Td>Macarana</Td>
              <Td>Brazil</Td>
              <Td>1 : 0</Td>
              <Td>Serbia</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Schedule;
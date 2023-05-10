import React from "react";

import {
  Box,
  Center,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack
} from "@chakra-ui/react";

const Schedule = () => {
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
              <Th>Date/Time</Th>
              <Th>Stadim</Th>
              <Th>Home Team</Th>
              <Th></Th>
              <Th>Away Team</Th>
            </Tr>
          </Thead>
          <Tbody>
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
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Schedule;
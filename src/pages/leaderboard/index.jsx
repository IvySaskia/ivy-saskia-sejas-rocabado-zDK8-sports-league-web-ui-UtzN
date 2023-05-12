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
  Show
} from "@chakra-ui/react";

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

const renderSwitchHeader = (param, h) => {
  switch(h) {
    case "Team Name":
      return <Th key={h}> {h} </Th>
    case "GF":
      return <Hide below="500px">
        <Th key={h} textAlign="center"> {h} </Th>
      </Hide> 
    case "GA":
      return <Hide below="500px">
        <Th key={h} textAlign="center"> {h} </Th>
      </Hide> 
    case "GD":
      return <Show below="500px">
        <Th key={h} textAlign="center"> {h} </Th>
      </Show>
    default:
      return <Th key={h} textAlign="center"> {h} </Th>;
  }
};

const Leaderboard = () => {
  const headers = ['Team Name', 'MP', 'GF', 'GA', 'GD', 'Points']; const myData = [{
    "teamName": "Brazil",
    "MP": 1,
    "GF": 2,
    "GA": 3,
    "GD": 4,
    "Points": 5
  },
  {
    "teamName": "Cameroon",
    "MP": 1,
    "GF": 2,
    "GA": 3,
    "GD": -4,
    "Points": 5
  }];
  
  
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
          League Standings
        </Heading>
      </Center>
      <TableContainer>
        <Table
          w='100%'
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
              myData.map((m, index) => (
                <Tr key={index}>
                  <Td width="55%">
                    <HStack justifyContent="left">
                      {renderFlag(m.teamName)}
                      <p>{m.teamName}</p>
                    </HStack>
                  </Td>
                  <Td textAlign="center">{m.MP}</Td>
                  <Hide below="500px">
                    <Td textAlign="center">{ m.GF }</Td>
                    <Td textAlign="center">{m.GA}</Td>
                  </Hide>
                  <Show below="500px">
                    <Td textAlign="center">{m.GD}</Td>
                  </Show>
                  <Td textAlign="center">{ m.Points }</Td>
                </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    
    </Flex>
  );
};

export default Leaderboard;
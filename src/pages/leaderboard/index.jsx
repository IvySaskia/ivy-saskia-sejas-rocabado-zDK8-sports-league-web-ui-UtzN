import React, { useContext, useState, useEffect } from "react";

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

const renderSwitchHeader = (h) => {
  switch(h) {
    case "Team Name":
      return <Th key={h}>{h}</Th>
    case "GF":
      return <Hide below="500px">
        <Th key={h} textAlign="center">{h}</Th>
      </Hide> 
    case "GA":
      return <Hide below="500px">
        <Th key={h} textAlign="center">{h}</Th>
      </Hide> 
    case "GD":
      return <Show below="500px">
        <Th key={h} textAlign="center">{h}</Th>
      </Show>
    default:
      return <Th key={h} textAlign="center">{h}</Th>;
  }
};


const Leaderboard = () => {
  const headers = ['Team Name', 'MP', 'GF', 'GA', 'GD', 'Points'];
  
  const { state } = useContext(GlobalContext);
  const { allMatches } = state;
  const [leaderboardData, setLeaderboardData] = useState([]);
  
  const getLeaderboard = () => {
    const standings = {};

    allMatches.forEach(match => {
      const { homeTeam, awayTeam, homeTeamScore, awayTeamScore } = match;

      // Verificar si el partido se jugó
      if (match.matchPlayed) {
        // Actualizar los datos del equipo local (goles a favor, goles en contra, partidos jugados)
        if (!standings[homeTeam]) {
          standings[homeTeam] = {
            MP: 1,
            GF: homeTeamScore,
            GA: awayTeamScore,
          };
        } else {
          standings[homeTeam].MP += 1;
          standings[homeTeam].GF += homeTeamScore;
          standings[homeTeam].GA += awayTeamScore;
        }

        // Actualizar los datos del equipo visitante (goles a favor, goles en contra, partidos jugados)
        if (!standings[awayTeam]) {
          standings[awayTeam] = {
            MP: 1,
            GF: awayTeamScore,
            GA: homeTeamScore,
          };
        } else {
          standings[awayTeam].MP += 1;
          standings[awayTeam].GF += awayTeamScore;
          standings[awayTeam].GA += homeTeamScore;
        }

        // Determinar el resultado del partido (victoria, empate)
            if (homeTeamScore > awayTeamScore) {
          // El equipo local ganó el partido
          if (!standings[homeTeam].W) {
            standings[homeTeam].W = 1;
          } else {
            standings[homeTeam].W += 1;
          }

          if (!standings[awayTeam].L) {
            standings[awayTeam].L = 1;
          } else {
            standings[awayTeam].L += 1;
          }
        } else if (homeTeamScore < awayTeamScore) {
          // El equipo visitante ganó el partido
          if (!standings[homeTeam].L) {
            standings[homeTeam].L = 1;
          } else {
            standings[homeTeam].L += 1;
          }

          if (!standings[awayTeam].W) {
            standings[awayTeam].W = 1;
          } else {
            standings[awayTeam].W += 1;
          }
        } else {
          // Empate
          if (!standings[homeTeam].D) {
            standings[homeTeam].D = 1;
          } else {
            standings[homeTeam].D += 1;
          }

          if (!standings[awayTeam].D) {
            standings[awayTeam].D = 1;
          } else {
            standings[awayTeam].D += 1;
          }
        }
      }
    });

    for (const team in standings) {
      const { W = 0, D = 0, L = 0, GF = 0, GA = 0, MP = 0 } = standings[team];
      const points = W * 3 + D;

      standings[team] = {
        MP,
        GF,
        GA,
        GD: GF - GA,
        Points: points
      };
    }

    // Sort the teams by points and goal difference
    const sortedStandings = Object.entries(standings).sort((a, b) => {
      if (a[1].Points !== b[1].Points) {
        return b[1].Points - a[1].Points;
      } else {
        return b[1].GD - a[1].GD;
      }
    });

    return sortedStandings;
  };  

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
            <Tr>{headers.map((h, index) => (
                <> {renderSwitchHeader(h)} </>
              ))}</Tr>
          </Thead>
          <Tbody>
            {getLeaderboard().map(([team, stats]) => (
                <Tr key={team}>
                  <Td width="55%">
                    <HStack justifyContent="left">
                      {renderFlag(team)}
                      <p>{team}</p>
                    </HStack>
                  </Td>
                  <Td textAlign="center">{stats.MP}</Td>
                  <Hide below="500px">
                    <Td textAlign="center">{stats.GF}</Td>
                    <Td textAlign="center">{stats.GA}</Td>
                  </Hide>
                  <Show below="500px">
                    <Td textAlign="center">{stats.GD}</Td>
                  </Show>
                  <Td textAlign="center">{stats.Points}</Td>
                </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Leaderboard;
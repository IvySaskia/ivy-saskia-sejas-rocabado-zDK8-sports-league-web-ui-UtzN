/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 */

import axios from 'axios';

const API_URL = "http://localhost:3001/";
const API_VERSION_URL = API_URL + "api/v1/";

class LeagueService {   
    constructor() {
        this.matches = [];
        this.leaderboard = [];
        this.error = false;
        this.token = "";
    }
    
    /**
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
    async setMatches(matches) {
        this.matches = matches;
        await this.generateLeaderboard();
    }



    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {
        return this.matches;
    }

    /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
    getLeaderboard() {
        return this.leaderboard;
    }
    
    /**
     * Asynchronic function to fetch the data from the server.
     */
    async fetchData() {
        try {
            const token = await this.getAccessToken();
            this.token = token.access_token;
            const matchesResponse = await axios.get(`${API_VERSION_URL}getAllMatches`, {
                headers: {
                'Authorization': `Bearer ${this.token}` 
                }
            });
            const matchesData = matchesResponse.data.matches;
            await this.setMatches(matchesData);
        } catch (error) {
            this.error = error;
        }
    }
    
    async getAccessToken() {
        try {
            const response = await axios.get(`${API_VERSION_URL}getAccessToken`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    async generateLeaderboard() {
        return new Promise((resolve) => {

            const teams = {};

            this.matches.forEach((match) => {
            const { homeTeam, awayTeam, homeTeamScore, awayTeamScore } = match;

            // Update home team data
            if (!teams[homeTeam]) {
                teams[homeTeam] = {
                teamName: homeTeam,
                matchesPlayed: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0,
                };
            }
            teams[homeTeam].matchesPlayed++;
            teams[homeTeam].goalsFor += homeTeamScore;
            teams[homeTeam].goalsAgainst += awayTeamScore;
            teams[homeTeam].goalDifference = teams[homeTeam].goalsFor - teams[homeTeam].goalsAgainst;
            if (homeTeamScore > awayTeamScore) {
                teams[homeTeam].points += 3; // Home team won
            } else if (homeTeamScore === awayTeamScore) {
                teams[homeTeam].points += 1; // Match was a draw
            }

            // Update away team data
            if (!teams[awayTeam]) {
                teams[awayTeam] = {
                teamName: awayTeam,
                matchesPlayed: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0,
                };
            }
            teams[awayTeam].matchesPlayed++;
            teams[awayTeam].goalsFor += awayTeamScore;
            teams[awayTeam].goalsAgainst += homeTeamScore;
            teams[awayTeam].goalDifference = teams[awayTeam].goalsFor - teams[awayTeam].goalsAgainst;
            if (awayTeamScore > homeTeamScore) {
                    teams[awayTeam].points += 3; // Away team won
                } else if (awayTeamScore === homeTeamScore) {
                    teams[awayTeam].points += 1; // Match was a draw
                }
            });

            const leaderboardData = Object.values(teams);
            leaderboardData.sort((a, b) => {
                if (a.points !== b.points) {
                    return b.points - a.points;
                } else {
                    return b.goalDifference - a.goalDifference;
                }   
            });

                this.leaderboard = leaderboardData;
            resolve();
            });
    }

    async getApiVersion() {
        try {
            const response = await axios.get(`${API_URL}api/version`);
            return response.data.version;
        } catch (error) {
            throw error;
        }
    }
}

export default LeagueService;
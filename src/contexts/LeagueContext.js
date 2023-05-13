import React, { createContext, useState } from 'react';
const initialState = {
  token: "",
  allMatches: [],
  allLeaderboad: []
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const storeToken = (payload) => {
    setState((prevState) => {
      return { ...prevState, token: payload };
    });  };

  const setMatches = (payload) => {
    setState((prevState) => {
      return { ...prevState, allMatches: payload };
    });
  };

  const setLeaderboard = (payload) => {
    setState((prevState) => {
      return { ...prevState, allLeaderboad: payload };
    });
  };

  return {
    state,
    storeToken,
    setMatches,
    setLeaderboard
  };
};

export const LeagueContext = createContext();

const LeagueContextProvider = ({ children }) => {
  const value = useInitialState();
  return (
    <LeagueContext.Provider value={value}>{children}</LeagueContext.Provider>
  );
};

export default LeagueContextProvider;

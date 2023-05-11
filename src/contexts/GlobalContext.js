import React, { createContext, useState } from 'react';
const initialState = {
  token: "",
  allMatches: []
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const storeToken = (payload) => {
    setState({ ...state, token: payload });
  };

  const setMatches = (payload) => {
    setState({ ...state, allMatches: payload.matches });
  };

  return {
    state,
    storeToken,
    setMatches
  };
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const value = useInitialState();
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

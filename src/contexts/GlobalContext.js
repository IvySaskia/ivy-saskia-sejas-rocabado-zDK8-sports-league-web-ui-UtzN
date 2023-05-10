import React, { createContext, useState } from 'react';
const initialState = {
  token: "",
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const storeToken = (payload) => {
    setState({ ...state, token: payload });
  };

  return {
    state,
    storeToken,
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

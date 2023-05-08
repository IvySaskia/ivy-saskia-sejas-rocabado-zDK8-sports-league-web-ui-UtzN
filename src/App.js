import * as React from 'react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import { ChakraProvider } from '@chakra-ui/react'

import { Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/main";
import Schedule from "./pages/schedule";
import Leaderboard from "./pages/leaderboard";
import NoPage from "./pages/no-page";

import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route path="/schedule">
            <Schedule/>
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="*">
            <NoPage />
          </Route>
        </Switch>
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/main";
import Schedule from "./pages/schedule";
import Leaderboard from "./pages/leaderboard";
import NoPage from "./pages/no-page";


function App() {
  return (
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
  );
}

export default App;

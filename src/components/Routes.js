// React-Router
import { Route, Switch } from "react-router";

// Components
import Home from "./Home";
import GarbagesList from "./GarbagesList";
import TreasuresList from "./TreasuresList";
import Signup from "./Signup";
import Signin from "./Signin";

function Routes() {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/treasures">
        <TreasuresList />
      </Route>
      <Route path="/garbages">
        <GarbagesList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;

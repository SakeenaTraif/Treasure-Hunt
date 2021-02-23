//React
import { Route, Switch } from "react-router";

//components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import RandomsList from "./components/RandomList";
import TreasuresList from "./components/TreasuresList"
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
    <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/randoms">
          <RandomsList />
        </Route>
        <Route path="/treasures">
          <TreasuresList />
        </Route>
  <Route path="/">
    <Home />
  </Route>
  </Switch>
  </div>
  );
}

export default App;

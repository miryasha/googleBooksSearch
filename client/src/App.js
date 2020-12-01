import React from "react";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved/" component={Saved} />
          </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;


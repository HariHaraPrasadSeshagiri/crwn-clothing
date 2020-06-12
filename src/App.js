import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatPage = () => (
  <div>
    <h1>HatS PAGE</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

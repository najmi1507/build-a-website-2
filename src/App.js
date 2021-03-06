import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./containers/Home";

import Details from "./containers/Details";

const apiDotenv = require('dotenv').config()

function App() {
  return (
  <Router>
    <Switch>
      {/* Details Route */}
      <Route path="/city">
        <Details />
      </Route>

      <Route path="/">
          <Home />
        </Route>
    </Switch>
  </Router>
  );
}

export default App;




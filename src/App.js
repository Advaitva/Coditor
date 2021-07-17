import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Home from "./Home/Home";
import Landing from './Landing/Landing';
class App extends React.Component {
  render() {
    
    return (
      <Router>

      <div className="App">
        <Switch>

        <Route exact path="/">
          <Landing/>
        </Route>
        
        <Route exact path="/edit" >
          <Home/>
            </Route>
            <Route exact path="/edit/:id" >
          <Home/>
          </Route>
        </Switch>
    </div>
      </Router>
  );
}
}

export default App;

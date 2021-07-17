import React from "react";
// import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Home from "./Home/Home";
// import Landing from './Landing/Landing';
class App extends React.Component {
  render() {
    
    return (
      
      <div className="App">
        <Home/>
        {/* <Router>
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
        </Router> */}
       
    </div>
  );
}
}

export default App;

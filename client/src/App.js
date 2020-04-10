import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>App.js rendered</h1>
      <Router>
        <Route exact path="/allusers" component = {Homepage} />
      </Router>
    </div>
  );
}

export default App;
/**
 * Note:
 *  - The route "/allusers" hits the create react route
 *  - The route "/users" hits the server API route
 *  - AVOID same route names bt frontend routes and express routes bcs the site is hosting both on the same url
 */
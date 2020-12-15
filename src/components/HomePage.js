
import '../App.css';

import React, { Component } from 'react';
import {
  Route,
  NavLink, Switch, 
  HashRouter, Redirect
} from "react-router-dom";
import Summary from './summary/Summary.js';
import Timesheet from './timesheet/Timesheet.js';
import Profile from './profile/Profile.js';




class HomePage extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Summary}/>
        <Route path="/timesheet" component={Timesheet}/>
        <Route path="/profile" component={Profile}/>
        <Redirect to="/" />
      </Switch>
    );
    return (
      <HashRouter>
        <div>
        <h1>Home Page</h1>
          <ul className="header">
            <li><NavLink to="/">Summary</NavLink></li>
            <li><NavLink to="/timesheet">Timesheet</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
          </ul>
          <div className="homepage">
            {routes}
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default HomePage;

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
import Login from './LoginPage.js';
import UserSensitiveInfo from './UserSensitiveInfo.js';
import AuthService from '../services/AuthService.js';
import ProtectedRoute from './ProtectedRoute.js';


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showSummary: false,
      showTimesheet: false,
      showProfile: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showTimesheet: true,
        showProfile: true,
        showSummary: true,
      });
    }
  }

  logOut() {
    this.setState({
      showTimesheet: false,
      showProfile: false,
      showSummary: false,
    });
    AuthService.logout();
  }

  render() {
    const { currentUser, showSummary, showTimesheet, showProfile } = this.state;
    let routes = (
      <Switch>
        <Route exact path={["/", "/login"]} component={Login}/>
        <ProtectedRoute exact path={["/summary"]} component={Summary}/>
        <ProtectedRoute path="/timesheet" component={Timesheet}/>
        <ProtectedRoute path="/profile" component={Profile}/>
        <ProtectedRoute path="/userinfo" component={UserSensitiveInfo}/>
        <Redirect to="/" />
      </Switch>
    );
    return (
      <HashRouter>
        <div>
        <h1>Home Page</h1>
          <ul className="header">
            {showSummary && (
              <li><NavLink to="/summary">Summary</NavLink></li>
            )}
            {showTimesheet && (
              <li><NavLink to="/timesheet">Timesheet</NavLink></li>
            )}
            {showProfile && (
              <li><NavLink to="/profile">Profile</NavLink></li>
            )}
            {/*currentUser && (
              <li><NavLink to="/userinfo">UserSensitiveInfo</NavLink></li>
            )*/}

            {currentUser ? (
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
          ) : (
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
          )}
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
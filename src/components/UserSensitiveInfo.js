import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService.js";
import UserService from "../services/UserService.js";

export default class UserSensitiveInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      userContent: "",
      adminContent: "",
      superContent: "",
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/login" });
    this.setState({ currentUser: currentUser, userReady: true });

    UserService.getUserBoard().then(response => {
        this.setState({
          userContent: response.data,
        });
      },
      (error) => {
        this.setState({
            userContent:
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            });
 /*
    Promise.allSettled([
        UserService.getUserBoard(),
        UserService.getSuperBoard(),
        UserService.getAdminBoard()
      ])
    .then(
        ([response1, response2, response3]) => {
          this.setState({
            userContent: response1.data,
            superContent: response2.data,
            adminContent: response3.data
          });
        },
        (error) => {
           
            this.setState({
            userContent:
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString(),
            superContent:
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString(),
            adminContent:
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            });*/
        /*
        ([error1, error2, error3]) => {
          this.setState({
            userContent:
              (error1.response &&
                error1.response.data &&
                error1.response.data.message) ||
              error1.message ||
              error1.toString(),
            superContent:
              (error2.response &&
                error2.response.data &&
                error2.response.data.message) ||
              error2.message ||
              error2.toString(),
            adminContent:
              (error3.response &&
                error3.response.data &&
                error3.response.data.message) ||
              error3.message ||
              error3.toString()
          });*/
        }
    );

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser, userContent, adminContent, superContent } = this.state;

    //{currentUser.accessToken.substring(0, 20)} ...{" "}
    //{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong>'s Login Info
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken}
          
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <p>
          <strong>User Content:</strong>{" "}
          {userContent}
        </p>
        <p>
          <strong>Super Admin Content:</strong>{" "}
          {superContent}
        </p>
        <p>
          <strong>Admin Content:</strong>{" "}
          {adminContent}
        </p>
      </div>: null}
      </div>
    );
  }
}
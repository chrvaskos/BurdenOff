import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import LoginForm from "../components/LoginForm";

class login extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <LoginForm />
        <FootBar />
      </div>
    );
  }
}

export default login;

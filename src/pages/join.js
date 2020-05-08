import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import JoinForm from "../components/JoinForm";

class join extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <JoinForm />
        <FootBar />
      </div>
    );
  }
}

export default join;

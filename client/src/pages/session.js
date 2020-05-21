import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import Session from "../components/Session";

class session extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <Session />
        <FootBar />
      </div>
    );
  }
}

export default session;

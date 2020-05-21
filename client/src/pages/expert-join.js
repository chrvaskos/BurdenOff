import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import ExpertJoinForm from "../components/ExpertJoinForm";

class expertJoin extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <ExpertJoinForm />
        <FootBar />
      </div>
    );
  }
}

export default expertJoin;

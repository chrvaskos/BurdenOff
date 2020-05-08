import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import UsefulLinks from "../components/UsefulLinks";

class usefulLinks extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <UsefulLinks />
        <FootBar />
      </div>
    );
  }
}

export default usefulLinks;

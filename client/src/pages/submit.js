import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import SubmitForm from "../components/SubmitForm";

class submit extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <SubmitForm />
        <FootBar />
      </div>
    );
  }
}

export default submit;

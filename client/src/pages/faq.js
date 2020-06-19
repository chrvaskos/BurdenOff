import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import Faq from "../components/Faq";

class faq extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <Faq />
        <FootBar />
      </div>
    );
  }
}

export default faq;

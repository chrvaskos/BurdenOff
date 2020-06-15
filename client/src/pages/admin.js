import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import AdminVerify from "../components/AdminVerify";

class admin extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <AdminVerify />
        <FootBar />
      </div>
    );
  }
}

export default admin;

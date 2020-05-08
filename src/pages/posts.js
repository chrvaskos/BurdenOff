import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import Posts from "../components/Posts";

class posts extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <Posts />
        <FootBar />
      </div>
    );
  }
}

export default posts;

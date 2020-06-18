import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import MyPosts from "../components/MyPosts";

class myposts extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <MyPosts />
        <FootBar />
      </div>
    );
  }
}

export default myposts;

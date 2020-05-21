import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FootBar from "../components/FootBar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Jumbotrons from "../components/Jumbotrons";
import FormQuote from "../components/FormQuote";

class Main extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <NavBar />
        <Hero />
        <Cards />
        <Jumbotrons />
        <FormQuote />
        <FootBar />
      </div>
    );
  }
}

export default Main;

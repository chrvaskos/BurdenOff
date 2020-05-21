import React, { Component } from "react";
import LogoImage from "../images/woman.png";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Hero extends Component {
  render() {
    return (
      <ImageDiv>
        <Container>
          <h1 className="font-weight-bold mb-4" style={{fontSize: 64}}>
            Burden Off
          </h1>
          <p className="mb-4" style={{fontSize: 20}}>
            There is always hope for a brighter <br /> tommorow. Get help from
            an expert <br /> now 100% anonymously and free!
          </p>
          <Link to="/join">
            <Button size="lg" variant="warning" className="ml-1">
              Sign Up Free
            </Button>
          </Link>
        </Container>
      </ImageDiv>
    );
  }
}

export default Hero;

const ImageDiv = styled.div`
  background-image: url(${LogoImage});
  height: 58vh;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

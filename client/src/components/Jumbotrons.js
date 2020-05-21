import React, { Component } from "react";
import { Container, Jumbotron, Button, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Jumbotrons extends Component {
  render() {
    return (
      <Container>
        <StyledRow className="row d-flex justify-content-center align-items-center my-5">
          <Col md="7">
            <Jumbotron className="bg-light jumbotronStyle mt-2">
              <h1>Want to help?</h1>
              <p style={{ fontSize: 20 }}>
                Join our expert team to help those in need!
              </p>
              <p>
                <Link to="/expert-join">
                  <Button variant="outline-warning" className="ml-1">
                    Sign Up as an Expert!
                  </Button>
                </Link>
              </p>
            </Jumbotron>
          </Col>
          <Col
            md="5"
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              src={require("../images/experts.jpg")}
              roundedCircle
              className="imageStyle mb-2"
            />
          </Col>
        </StyledRow>
        <StyledRow className="row d-flex justify-content-center align-items-center my-5">
          <Col md="7" xs="12" className="order-md-2">
            <Jumbotron className="jumbotronStyle bg-light d-flex flex-wrap justify-content-end align-items-end my-3">
              <h1 className="align-self-end">Hello, world!</h1>
              <p className="align-self-end text-right" style={{ fontSize: 20 }}>
                Some of our users have decided to share their problems. <br />
                Maybe their interactions with the experts can help you!
              </p>
              <p className="align-self-end">
                <Link to="/posts">
                  <Button
                    variant="outline-primary"
                    className="ml-1 align-self-end"
                  >
                    Check previous posts!
                  </Button>
                </Link>
              </p>
            </Jumbotron>
          </Col>
          <Col
            md="5"
            xs="12"
            className="d-flex justify-content-center align-items-center order-md-1"
          >
            <Image
              src={require("../images/dudes.jpg")}
              roundedCircle
              className="imageStyle my-2"
            />
          </Col>
        </StyledRow>
      </Container>
    );
  }
}

export default Jumbotrons;

const StyledRow = styled.div`
  .imageStyle {
    width: 19rem;
    height: 19rem;
    border: 2px solid #343a40;
    box-shadow: 0 0 6px #343a40;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }

  .jumbotronStyle {
    box-shadow: 1px 1px 6px #343a40;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;

    // &:hover {
    //   box-shadow: 8px 8px 24px #343a40;
    // }
  }
`;

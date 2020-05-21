import React, { Component } from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import styled from "styled-components";

class FormQuote extends Component {
  render() {
    return (
      <StyledDiv className="bg-dark text-light">
        <Container>
          <blockquote className="blockquote d-flex justify-content-center align-items-center">
            <Row className="d-flex flex-column justify-content-center align-items-center">
              <p
                className="mt-4 d-inline align-self-end"
                style={{ fontSize: 30 }}
              >
                "The walls we build around us to keep sadness out also keeps out
                the joy."
              </p>
              <footer
                className="mb-3 blockquote-footer d-inline align-self-end"
                style={{ fontSize: 18 }}
              >
                Jim Rohn
              </footer>
              <p className="mb-4 text-center" style={{ fontSize: 24 }}>
                The Internet has countless ways to help you tear down those
                walls <br /> no matter how tall they are!
              </p>
            </Row>
          </blockquote>
        </Container>
        <Form className="mb-5">
          <Container>
            <Row>
              <Col xs="12" md="3">
                <Form.Group controlId="formGroupUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="user"
                    placeholder="Pick a username"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs="12" md="3">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs="12" md="3">
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                </Form.Group>
              </Col>
              <Col
                xs="12"
                md="3"
                className="d-flex flex-column justify-content-center align-content-center"
              >
                <Button className="mt-3" variant="warning" type="submit">
                  Sign Up Now!
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </StyledDiv>
    );
  }
}

export default FormQuote;

const StyledDiv = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 90vh;
  }
`;

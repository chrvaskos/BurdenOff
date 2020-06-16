import React, { Component } from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

class FormQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "1",
      redirect: false,
      sessionRole: sessionStorage.getItem("role"),
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e) {
    fetch("/api/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(
      function (res) {
        console.log(res);
        this.setState({ redirect: true });
        return res.json();
      }.bind(this)
    );
    e.preventDefault();
    // ... submit to API o  r something
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    if (
      this.state.sessionRole === "1" ||
      this.state.sessionRole === "2" ||
      this.state.sessionRole === "3"
    ) {
      return null;
    } else {
      return (
        <StyledDiv className="bg-dark text-light">
          <Container>
            <blockquote className="blockquote d-flex justify-content-center align-items-center">
              <Row className="d-flex flex-column justify-content-center align-items-center">
                <p
                  className="mt-4 d-inline align-self-end"
                  style={{ fontSize: 30 }}
                >
                  "The walls we build around us to keep sadness out also keeps
                  out the joy."
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
                      onChange={this.handleUsernameChange}
                      placeholder="Pick a username"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs="12" md="3">
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      onChange={this.handleEmailChange}
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
                      onChange={this.handlePasswordChange}
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
                  <Button
                    onClick={this.handleSubmit}
                    className="mt-3"
                    variant="warning"
                    type="submit"
                  >
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

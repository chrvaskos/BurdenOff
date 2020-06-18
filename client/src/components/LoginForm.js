import React, { Component } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Image,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      passwordArray: [],
      redirect: false,
      visible: false,
      count: 0,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    fetch("/api/users")
      .then((res) => res.json())
      .then((userArray) => this.setState({ userArray }));
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e) {
    for (let i = 0; i < this.state.userArray.length; i++) {
      if (this.state.username == this.state.userArray[i].username) {
        this.state.passwordArray[0] = this.state.password;
        this.state.passwordArray[1] = this.state.userArray[i].password;
        fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state.passwordArray),
        })
          .then(function (res) {
            return res.text();
          })
          .then(
            function (matched) {
              if (matched == "Success") {
                sessionStorage.setItem(
                  "username",
                  this.state.userArray[i].username
                );
                sessionStorage.setItem("role", this.state.userArray[i].role);
                sessionStorage.setItem("ID", this.state.userArray[i].id);
                sessionStorage.setItem(
                  "verified",
                  this.state.userArray[i].verified
                );

                this.setState({ redirect: true });
              } else {
                this.setState({ visible: true });
              }
            }.bind(this)
          );
      } else {
        this.state.count++;
      }

      // if res == true, password matched
      // else wrong password
    }
    if (this.state.userArray.length === this.state.count)
      this.setState({ visible: true });
    e.preventDefault();
    // ... submit to API o  r something
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Row className="py-5">
        <Container className="d-flex flex-column my-3 login-container">
          <h1 className="align-self-center mb-5">
            <Image
              src={require("../images/twitterlogo.png")}
              roundedCircle
              className="login-logo-image"
            />
          </h1>
          <Form
            className="align-self-center"
            onSubmit={this.handleSubmit}
            style={{ width: 300 }}
          >
            <Form.Group controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleUsernameChange}
                placeholder="Username"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={this.handlePasswordChange}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3" style={{ width: 300 }}>
              Login
            </Button>
            <Alert variant="danger" show={this.state.visible} className="mt-2">
              Username or password is incorrect!
            </Alert>
          </Form>
          <Col
            className="align-self-center d-inline border my-5"
            style={{ width: 300 }}
          >
            <p className="text-center pt-3">
              New to Burden Off? <br />
              <Link to="/join">Create an account now!</Link>
            </p>
          </Col>
        </Container>
      </Row>
    );
  }
}

export default LoginForm;

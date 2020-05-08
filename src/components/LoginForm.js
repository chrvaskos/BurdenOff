import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  render() {
    return (
      <Row className="py-5">
        <Container className="d-flex flex-column my-3">
          <h1 className="align-self-center mb-5">Logo</h1>
          <Form className="align-self-center" style={{ width: 300 }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: 300 }}>
              Login
            </Button>
          </Form>
          <Col className="align-self-center d-inline border my-5" style={{ width: 300 }}>
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

import React, { Component } from "react";
import { Container, Form, Button, Row, InputGroup } from "react-bootstrap";

class ExpertJoinForm extends Component {
  render() {
    return (
      <Row className="py-5">
        <Container className="d-flex flex-column mb-2">
          <p className="align-self-center mb-2">Join Burden Off</p>
          <h1 className="align-self-center mb-5">Create your account</h1>
          <Form className="align-self-center" style={{ width: 450 }}>
            <Form.Group controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Pick a username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Εmail address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email adress"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Expertise</Form.Label>
              <Form.Control as="select" custom>
                <option value="" disabled selected hidden>
                  Select your expertise
                </option>
                <option>Psychoanalysis in Psychology</option>
                <option>Counseling Psychology</option>
                <option>School Psychology</option>
                <option>Clinical Psychology</option>
                <option>Clinical Health Psychology</option>
                <option>Clinical Child Psychology</option>
                <option>Clinical Neuropsychology</option>
                <option>Industrial-Organizational Psychology</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Personal Info</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Tell us why would you like to join us!"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="mt-5">
              <Form.Check
                type="checkbox"
                label="By creating an account, you agree to the Terms of Service. "
              />
            </Form.Group>
            <Button variant="warning" type="submit" style={{ width: 450 }}>
              Sign Up as an Expert
            </Button>
          </Form>
        </Container>
      </Row>
    );
  }
}

export default ExpertJoinForm;

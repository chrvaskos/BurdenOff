import React, { Component } from "react";
import { Container, Form, Button, Row, InputGroup } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

class ExpertJoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "2",
      redirect: false,
      verified: "0"
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpertiseChange = this.handleExpertiseChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
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

  handleExpertiseChange(e) {
    this.setState({ expertise: e.target.value });
  }
  handleBioChange(e) {
    this.setState({ bio: e.target.value });
  }

  handleSubmit(e) {
    fetch("/api/newExpert", {
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
                  onChange={this.handleUsernameChange}
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
                onChange={this.handleEmailChange}
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
                onChange={this.handlePasswordChange}
                type="password"
                placeholder="Create a password"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Expertise</Form.Label>
              <Form.Control
                onChange={this.handleExpertiseChange}
                as="select"
                custom
              >
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
                onChange={this.handleBioChange}
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
            <Button
              onClick={this.handleSubmit}
              variant="warning"
              type="submit"
              style={{ width: 450 }}
            >
              Sign Up as an Expert
            </Button>
          </Form>
        </Container>
      </Row>
    );
  }
}

export default ExpertJoinForm;

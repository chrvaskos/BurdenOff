import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Container, Form, Button, Row, InputGroup } from "react-bootstrap";



class JoinForm extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      role: '1',
      verified: '0',
      redirect: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }
  handleSubmit(e){
      
      fetch('/api/newUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(res) {
        console.log(res)
        this.setState({ redirect: true });
        return res.json();
      }.bind(this));    
      e.preventDefault()
      // ... submit to API o  r something
    };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/'/>;
    }
    return (
      <Row className="py-5">
        <Container className="d-flex flex-column mt-2 mb-5">
          <p className="align-self-center mb-2">Join Burden Off</p>
          <h1 className="align-self-center mb-5">Create your account</h1>
          <Form
            className="align-self-center"            
            style={{ width: 450 }}
          >
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
                type="email"
                onChange={this.handleEmailChange}
                placeholder="Enter your email adress"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email adress.
              </Form.Control.Feedback>
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
                data-toggle="popover"
                title="Password Strength"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="mt-5">
              <Form.Check
                type="checkbox"
                label="By creating an account, you agree to the Terms of Service. "
              />
            </Form.Group>
            <Button
              variant="warning"
              type="submit"
              onClick={this.handleSubmit}
              style={{ width: 450 }}
            >
              Sign Up
            </Button>
          </Form>
        </Container>
      </Row>
    );
  }
}

export default JoinForm;

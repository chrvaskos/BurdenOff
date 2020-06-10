import React, { Component } from "react";
import { Container, Form, Button, Row, InputGroup } from "react-bootstrap";



const initialFormData = Object.freeze({
  username: "",
  email:"",
  password: ""
  
});


// class JoinForm extends Component {
//   render() {
  const JoinForm = () => {
    
    const [formData, updateFormData] = React.useState(initialFormData);
    const handleChange = (e) => {
      updateFormData({
        ...formData,
    
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
      // ... submit to API or something
    };
    

    return (
      <Row className="py-5">
        <Container className="d-flex flex-column mt-2 mb-5">
          <p className="align-self-center mb-2">Join Burden Off</p>
          <h1 className="align-self-center mb-5">Create your account</h1>
          <Form className="align-self-center" style={{ width: 450 }}>
            <Form.Group controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <Form.Control
                  onChange={handleChange}
                  name="username"
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
                name="email"
                type="email"
                onChange={handleChange}
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
                onChange={handleChange}
                name="password"
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
            <Button variant="warning" type="submit" onClick={handleSubmit} style={{ width: 450 }}>
              Sign Up
            </Button>
          </Form>
        </Container>
      </Row>
    );
    }


export default JoinForm;

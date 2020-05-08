import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

class SubmitForm extends Component {
  render() {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center my-3">
        <CenterContent>
          <h1 className="mx-1 mt-2">Create a post</h1>
          <Form className="mx-1 my-4">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select">
                <option selected hidden>
                  Choose Category
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title (optional)"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Post</Form.Label>
              <Form.Control
                as="textarea"
                rows="9"
                placeholder="Your post"
                required
              />
            </Form.Group>
            <Row className="d-flex flex-column">
              <Col>
                <Form.Group>
                  <Form.Check label="Make the post public" />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </CenterContent>
      </Container>
    );
  }
}

export default SubmitForm;

const CenterContent = styled.div`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    width: 60%;
  }
  @media only screen and (max-width: 992px) {
    width: 70%;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (max-width: 576px) {
    width: 90%;
  }
`;

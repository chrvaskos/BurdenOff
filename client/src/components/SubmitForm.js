import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {  Redirect } from "react-router-dom";
import UserProfile from "../util/UserProfile";

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solved: "0",
      user_id_fk: `${UserProfile.getID()}`,
      checked: false,
      redirect: false
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCheckClick=this.handleCheckClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckClick(e){
    this.setState({ checked: !this.state.checked });
  };

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {   
    fetch("/api/newPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(
      function (res) {              
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
      return <Redirect to='/posts'/>;
    }
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center my-3">
        <CenterContent>
          <h1 className="mx-1 mt-2">Create a post</h1>
          <Form className="mx-1 my-4">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control onChange={this.handleCategoryChange} as="select">
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
                onChange={this.handleTitleChange}
                type="text"
                placeholder="Title (optional)"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Post</Form.Label>
              <Form.Control
                onChange={this.handleContentChange}
                as="textarea"
                rows="9"
                placeholder="Your post"
                required
              />
            </Form.Group>
            <Row className="d-flex flex-column">
              <Col>
                <Form.Group>
                  <Form.Check
                    checked={this.state.checked}
                    onChange={this.handleCheckClick}
                    label="Make the post public"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Button  onClick={this.handleSubmit} variant="primary" type="submit">
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

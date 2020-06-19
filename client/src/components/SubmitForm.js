import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solved: "0",
      user_id_fk: sessionStorage.getItem("ID"),
      checked: false,
      redirect: false,
      time: "",
      username: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckClick(e) {
    this.setState({ checked: !this.state.checked });
  }

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
    this.state.time = new Date().toLocaleString();
    this.state.username = sessionStorage.getItem("username");
    fetch("/api/newPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(
      function (res) {
        this.setState({ redirect: true });
        return res.json();
      }.bind(this)
    );
    e.preventDefault();
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/posts" />;
    }
    if (
      sessionStorage.getItem("role") === "1" ||
      sessionStorage.getItem("role") === "2" ||
      sessionStorage.getItem("role") === "3"
    ) {
      return (
        <Container className="d-flex flex-column justify-content-center align-items-center my-3">
          <CenterContent>
            <h1 className="mx-1 mt-2">Create a post</h1>
            <Form onSubmit={this.handleSubmit} className="mx-1 my-4">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  onChange={this.handleCategoryChange}
                  as="select"
                  required
                >
                  <option selected hidden>
                    Choose Category
                  </option>
                  <option>Anxiety</option>
                  <option>Depression</option>
                  <option>Family</option>
                  <option>Relationships</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={this.handleTitleChange}
                  type="text"
                  placeholder="Title"
                  required
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
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </CenterContent>
        </Container>
      );
    } else {
      return <Redirect to="/" />;
    }
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

import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import MessageExp from "./MessageExp";
import MessageUser from "./MessageUser";

class Session extends Component {
  render() {
    return (
      <Container className="mt-2">
        <h1>Session</h1>
        <Container className="border my-4">
          <Row className="d-flex flex-row justify-content-start">
            <MessageUser />
            <MessageExp />
            <MessageUser />
            <MessageExp />
          </Row>
          <Form className="my-3">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Type your message..."
                required
              />
            </Form.Group>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    );
  }
}

export default Session;

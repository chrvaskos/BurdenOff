import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Faq extends Component {
  render() {
    return (
      <Container>
        <Row className="my-4">
          <h1>FAQ <small>Work in Progress!</small></h1>
        </Row>
        <Row className="d-flex flex-column">
          <h3>Lorem ipsum dolor sit amet?</h3>
          <p>Velit nostrum est molestiae sunt!</p>
          <h3>Lorem ipsum dolor sit amet?</h3>
          <p>Velit nostrum est molestiae sunt!</p>
          <h3>Lorem ipsum dolor sit amet?</h3>
          <p>Velit nostrum est molestiae sunt!</p>
        </Row>
      </Container>
    );
  }
}

export default Faq;

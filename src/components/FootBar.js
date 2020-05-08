import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FootBar extends Component {
  render() {
    return (
      <div className="bg-dark text-light pt-2">
        <Container>
          <Row className="d-flex justify-content-center mt-2">
            <Col xs="12" md="6">
              <h5 className="title d-flex justify-content-start justify-content-md-end">
                Footer Content
              </h5>
              <p className="title clearfix d-flex justify-content-start justify-content-md-end">
                Lorem ipsum, dolor sit amet consectetur
                <br /> Error voluptatibus iure tempore dolorem
              </p>
            </Col>
            <Col xs="12" md="4">
              <h5 className="title">Links</h5>
              <ul className="px-1">
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="footer-copyright text-center py-3">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> Burden Off </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default FootBar;

import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { twitter } from "react-icons-kit/icomoon/twitter";
import { ic_mail_outline } from "react-icons-kit/md/ic_mail_outline";
import { link } from "react-icons-kit/icomoon/link";
import "../css/App.css";

class FootBar extends Component {
  render() {
    return (
      <div className="bg-dark text-light pt-2">
        <Container className="footer-container">
          <Row className="d-flex justify-content-center mt-2">
            <Col xs="12" md="5">
              <h5 className="title d-flex justify-content-start justify-content-md-end mr-1">
                Contact Information:
              </h5>
              <ul className="list-unstyled">
                <li>
                  <p className="title clearfix d-flex justify-content-start justify-content-md-end mr-1 mt-1">
                    <Icon icon={ic_mail_outline} size="26" className="mr-2" />
                    <text className="mt-1">burdenoff.info@gmail.com</text>
                  </p>
                </li>
                <li>
                  <h5 className="title d-flex justify-content-start justify-content-md-end mr-2">
                    <Icon icon={twitter} size="24" className="mr-2" />
                    <a className="mt-1" href="https://twitter.com/BurdenOff">
                      Burden Off
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
            <Col md="2" className="d-flex justify-content-center">
              <Image
                src={require("../images/twitterlogo.png")}
                roundedCircle
                className="footer-logo-image"
              />
            </Col>
            <Col xs="12" md="5">
              <h5 className="title ml-2">
                <Icon icon={link} size="20" className="mr-2" />
                Links
              </h5>
              <ul className="px-1 ml-2">
                <li className="list-unstyled">
                  <a href="https://www.auth.gr/">
                    Aristotle University <br /> of Thessaloniki
                  </a>
                </li>
                <li className="list-unstyled">
                  <a>
                    <Link to="/faq">FAQ</Link>
                  </a>
                </li>
                <li className="list-unstyled">
                  <a>
                    <Link to="/useful-links">Useful Links</Link>
                  </a>
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

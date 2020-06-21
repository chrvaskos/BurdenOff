import React, { Component } from "react";
import { Container, Card, Col } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { lock } from "react-icons-kit/fa/lock";
import { university } from "react-icons-kit/fa/university";
import { graduationCap } from "react-icons-kit/fa/graduationCap";
import styled from "styled-components";
import "../css/App.css";

class Cards extends Component {
  render() {
    return (
      <Container className="cards-container">
        <StyledRow className="row d-flex">
          <Col md="4" xs="12" className="my-5">
            <Card
              className="card-transition rounded card-fix"
            >
              <Card.Body>
                <Card.Title>
                  <Icon
                    className="d-flex justify-content-center align-items-center mt-2"
                    size={64}
                    icon={lock}
                  />
                </Card.Title>
                <Card.Text
                  className="text-center mt-3"
                  style={{ fontSize: 20 }}
                >
                  We don't share your problem with others unless you want us to!
                  It will be between you and the experts!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" xs="12" className="my-5">
            <Card
              className="card-transition rounded card-fix"
            >
              <Card.Body>
                <Card.Title>
                  <Icon
                    className="d-flex justify-content-center align-items-center mt-2"
                    size={64}
                    icon={graduationCap}
                  />
                </Card.Title>
                <Card.Text
                  className="text-center mt-4"
                  style={{ fontSize: 20 }}
                >
                  Get opinions from people like clinical psychologists or
                  psychology professors!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" xs="12" className="my-5">
            <Card
              className="card-transition rounded card-fix"
            >
              <Card.Body>
                <Card.Title>
                  <Icon
                    className="d-flex justify-content-center align-items-center mt-2"
                    size={64}
                    icon={university}
                  />
                </Card.Title>
                <Card.Text
                  className="text-center mt-3"
                  style={{ fontSize: 20 }}
                >
                  This effort was made possible with the help and patronage of{" "}
                  <br />
                  Aristotle University <br /> of Thessaloniki!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </StyledRow>
      </Container>
    );
  }
}

export default Cards;

const StyledRow = styled.div`
  .card-transition {
    box-shadow 5px 5px 15px #343a40;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }
`;

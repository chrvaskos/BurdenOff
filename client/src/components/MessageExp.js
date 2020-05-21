import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { userMd } from "react-icons-kit/fa/userMd";

class MessageExp extends Component {
  render() {
    return (
      <Col md="7" className="my-2 d-flex">
        <Icon size={48} icon={userMd} className="align-self-center" />
        <Card body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ullam
          aliquam cupiditate, nulla tempore, quibusdam atque sunt, molestias
          perspiciatis commodi corporis voluptatibus nam! Doloremque facilis eum
          porro. Aspernatur, esse eum?
        </Card>
      </Col>
    );
  }
}

export default MessageExp;

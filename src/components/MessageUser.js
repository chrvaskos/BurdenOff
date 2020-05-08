import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/fa/user";

class MessageUser extends Component {
  render() {
    return (
      <Col md="7" className="my-2 ml-auto d-flex flex-row justify-content-end">
        <Card body>This is some text within a card body.</Card>
        <Icon size={48} icon={user} className="align-self-center" />
      </Col>
    );
  }
}

export default MessageUser;

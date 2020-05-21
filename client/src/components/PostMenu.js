import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class PostMenu extends Component {
  render() {
    return (
      <Nav variant="pills" defaultActiveKey="All" className="my-1 mx-1">
        <Nav.Item>
          <Nav.Link eventKey="All">All Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1">Category 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">Category 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">Category 3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4">Category 4</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default PostMenu;

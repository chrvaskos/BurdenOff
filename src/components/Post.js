import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

const db = testdb.all();

class Post extends Component {
  render() {
    return (
      <Card className="my-3 mx-1">
        <Card.Header>Post Title</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item variant="light" className="text-dark">
            Problem: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint nihil quam vero saepe vel nam nesciunt corrupti accusamus?
            Veritatis ducimus, molestias eum vel aliquid laudantium deleniti
            possimus nesciunt placeat asperiores.
          </ListGroup.Item>
          <ListGroup.Item variant="success">
            Solution: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint nihil quam vero saepe vel
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}

export default Post;

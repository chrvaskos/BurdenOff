import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";



class Post extends Component {
  constructor() {
    super();
    this.state = {
      postArray: [],
    };
  }

  componentDidMount() {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((postArray) =>
        this.setState({ postArray })
        
      );
  }
  
  render() {
    return (
      <div>
        
        {this.state.postArray.map((post) => (
          <Card key={post.id} className="my-3 mx-1">
            <Card.Header>{post.title}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item variant="light" className="text-dark">
                Problem: {post.content}
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                Solution: {post.solution}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    );
  }
}

export default Post;

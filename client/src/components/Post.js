import React, { Component } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      postArray: [],
      posts: [],
      verified: sessionStorage.getItem("verified"),
      shouldShowButton: false,
    };
  }

  componentDidMount() {
    fetch(`/api/posts/${this.state.verified}`)
      .then((res) => res.json())
      .then((postArray) => this.setState({ postArray }));
  }

  render() {
    let currentKey = sessionStorage.getItem("key");
    this.state.posts = [];
    if (currentKey === "All") {
      this.state.posts = this.state.postArray;
    } else {
      for (let i = 0; i < this.state.postArray.length; i++) {
        if (this.state.postArray[i].category === parseInt(currentKey)) {
          this.state.posts.push(this.state.postArray[i]);
        }
      }
    }

    return (
      <div>
        {this.state.posts.map((post) => (
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
        <PostCard
          title="Χρειαζομαι βοηθεια"
          category="Bullying"
          content="Με βαρανε στο σπιτι"
          solution="Βαρα τους κι εσυ"
          user="mhtsos123"
          when="Sunday 6:23PM"
          visibility=""
          solved={0}
        />
      </div>
    );
  }
}

const PostCard = ({
  title,
  category,
  content,
  solution,
  solved,
  visibility,
  user,
  when,
}) => (
  <Card className="my-3 mx-1">
    <Card.Header>
      <div>
        <Button variant="danger" size="sm" className="float-left mr-2">
          X
        </Button>
        <strong>{title}</strong>
        <text className="float-right">{category}</text>
      </div>
    </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item variant="light" className="text-dark">
        {content}
        <hr className="mb-0 mt-1" />
        <small className="float-right text-muted m-0 p-0">
          <i className="far m-0 p-0" /> Posted by {user} at {when}
        </small>
      </ListGroup.Item>
      <ListGroup.Item variant={solved ? "success" : "danger"}>
        <div className="my-0 py-0">
          {solution}
          <Button className={"float-right " + visibility}>Start Session</Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default Post;

import React, { Component } from "react";
import { Container, Button, Row, Card, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import "../css/App.css";

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPostArray: [],
    };

    fetch(`/api/post/${sessionStorage.getItem("ID")}`)
      .then((res) => res.json())
      .then((myPostArray) => this.setState({ myPostArray }));
  }
  render() {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center posts-container">
        <CenterContent>
          <Row className="d-flex flex-row align-self-start">
            <h3 className="my-3 mx-1" style={{ color: "#343a40" }}>
              My Posts
            </h3>
          </Row>
          <Row
            className="d-flex flex-column align-self-start posts-wrap mb-3"
            style={{ width: "100%" }}
          >
            <div>
              {this.state.myPostArray.map((post) => (
                <MyPostCard
                  title={post.title}
                  category={post.category}
                  content={post.content}
                  solution={post.solution}
                  user={post.username}
                  when={post.time}
                  solved={post.solved}
                />
              ))}
            </div>
          </Row>
        </CenterContent>
      </Container>
    );
  }
}

const MyPostCard = ({
  title,
  category,
  content,
  solution,
  solved,
  user,
  when,
}) => (
  <Card className="my-3 mx-1">
    <Card.Header>
      <div>
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
        <div className="my-0 py-0">{solution}</div>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default MyPosts;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
`;

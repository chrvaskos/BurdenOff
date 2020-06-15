import React, { Component } from "react";
import { Container, Button, Row } from "react-bootstrap";
import Post from "./Post";
import PostMenu from "./PostMenu";
import CreatePost from "./CreatePost";
import styled from "styled-components";
import "../css/App.css";

class Posts extends Component {
  render() {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center posts-container">
        <CenterContent>
          <Row className="d-flex flex-row align-self-start">
            <h3 className="my-3 mx-1" style={{ color: "#343a40" }}>
              Posts
              <small class="mx-3 text-muted">
                Create a post or check previous public posts from our users!
              </small>
            </h3>
          </Row>
          <Row className="d-flex flex-row align-self-start">
            <CreatePost />
          </Row>
          <Row className="d-flex flex-row align-self-start">
            <PostMenu />
          </Row>
          <Row
            className="d-flex flex-column align-self-start posts-wrap mb-3"
            style={{ width: "100%" }}
          >
            <Post />
          </Row>
        </CenterContent>
      </Container>
    );
  }
}

export default Posts;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
`;

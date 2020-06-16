import React, { Component } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      postArray: [],
      posts: [],
      verified: sessionStorage.getItem("verified"),
      shouldShowButton: false,
      userArray: [],
      user_two: "",
      title: "",
      postId:"",
      user_one: sessionStorage.getItem("ID"),
      solved: "1",
      id: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getVisibility = this.getVisibility.bind(this);
  }

  componentDidMount() {
    fetch(`/api/posts/${this.state.verified}`)
      .then((res) => res.json())
      .then((postArray) => this.setState({ postArray }));
  }

  getVisibility(role, intended, solved) {
    if (role === intended && solved === 0) {
      return "";
    } else {
      return "invisible";
    }
  }
  handleSubmit(e) {
    this.state.user_two = e.target.getAttribute("user_id_fk");
    this.state.title = e.target.getAttribute("title");
    this.state.id = e.target.getAttribute("id");
    


    fetch("/api/newConv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(
      function (res) {
        return res.json();
      }.bind(this)
    );
    e.preventDefault();

    fetch("/api/putPost", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(
      function (res) {
        this.setState({ redirect: true });
        return res.json();
      }.bind(this)
    );
    e.preventDefault();

    // ... submit to API o  r something
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/session" />;
    }
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
          <PostCard
            key={post.id}            
            title={post.title}
            category={post.category}
            content={post.content}
            solution={post.solution}
            user={post.username}
            when={post.time}
            visibility={this.getVisibility(
              sessionStorage.getItem("role"),
              "2",
              post.solved
            )}
            deleteVis={this.getVisibility(
              sessionStorage.getItem("role"),
              "3",
              0
            )}
            solved={post.solved}
            user_id_fk={post.user_id_fk}
            handleSubmit={this.handleSubmit}
            id={post.id}
          />
        ))}
      </div>
    );
  }
}

const PostCard = ({
  handleSubmit,
  title,
  category,
  content,
  solution,
  solved,
  visibility,
  user,
  when,
  user_id_fk,
  deleteVis,
  id,
}) => (
  <Card className="my-3 mx-1">
    <Card.Header>
      <div>
        <strong>{title}</strong>
        <Button
          variant="danger"
          size="sm"
          className={"float-right mr-2 " + deleteVis}
        >
          X
        </Button>
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
          <Button
            className={"float-right " + visibility}
            title={title}
            user_id_fk={user_id_fk}
            id={id}
            onClick={handleSubmit}
          >
            Start Session
          </Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default Post;

import React, { Component } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import "../css/App.css";


class Session extends Component {
  constructor() {
    super();
    this.state = {
      replyArray: [],
      c_id_fk: "1",
      convArray: [],
      userArray: [],
      time:"",
      user_id_fk:sessionStorage.getItem("ID"),
      redirect: false
      

    };
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((userArray) => this.setState({ userArray }));
    this.getOtherName = this.getOtherName.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getName=this.getName.bind(this);
    this.handleMessageChange=this.handleMessageChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(`/api/conv/${sessionStorage.getItem("ID")}`)
      .then((res) => res.json())
      .then((convArray) => this.setState({ convArray }));

    fetch(`/api/replies/${this.state.c_id_fk}`)
      .then((res) => res.json())
      .then((replyArray) => this.setState({ replyArray }));
  }

  getName(id) {
    for (let i = 0; i < this.state.userArray.length; i++) {
      if (parseInt(this.state.userArray[i].id) === id) {       
        return this.state.userArray[i].username;
      }
    }
  }

  getOtherName(id1, id2) {
    let id;
    if (id1 !== parseInt(sessionStorage.getItem("ID"))) {
      id = id1;
    } else {
      id = id2;
    }
    for (let i = 0; i < this.state.userArray.length; i++) {
      if (parseInt(this.state.userArray[i].id) === id) {
        console.log(this.state.userArray[i].username);
        return this.state.userArray[i].username;
      }
    }
  }
  getPosition(id) {
    if (id === parseInt(sessionStorage.getItem("ID"))) {
      return "right";
    } else {
      return "left";
    }
  }

  handleMessageChange(e) {
    this.setState({ reply: e.target.value });
  }

  handleSubmit(e) {   
    this.state.time=new Date().toLocaleString();
    console.log(`${this.state.time}`);
    fetch("/api/newReply", {
      method: "POST",
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

  // console.log(`${this.state.userArray}`);

  render() {
    const { redirect } = this.state;
    if (redirect) {
      window.location.reload();
    }
    return (
      <Container className="mt-2 session-container">
        <Container className="border my-4">
          <Row className="px-lg-2 px-2 chat-row">
            <Col md="4" xl="3" className="px-0 mb-2 mb-md-0">
              <h3 className="font-weight-bold m-3 text-lg-left">Sessions</h3>
              <Col className="z-depth-1 p-3">
                <ListGroup as="ul" className="session-list">
                  {this.state.convArray.map((conv) => (
                    <Conv
                      key={conv.c_id}
                      name={this.getOtherName(conv.user_one, conv.user_two)}
                      title={conv.title}
                      active={true}
                    />
                  ))}
                </ListGroup>
              </Col>
            </Col>
            <Col md="8" xl="9" className="pl-md-3 px-lg-auto mt-2 mt-md-0">
              <Col className="chat-col">
                <Col className="inner-chat-col">
                  <ListGroup
                    as="ul"
                    id="chat-room"
                    className="list-unstyled p-3 chat-room"
                  >
                    {this.state.replyArray.map((reply) => (
                      <ChatMessage
                        author={this.getName(reply.user_id_fk)}
                        when={reply.time}
                        message={reply.reply}
                        position={this.getPosition(reply.user_id_fk)}
                      />
                    ))}
                  </ListGroup>
                </Col>
              </Col>
              <Form className="my-3">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                  onChange={this.handleMessageChange}
                    as="textarea"
                    rows="3"
                    placeholder="Type your message..."
                    required
                  />
                </Form.Group>
                <Row>
                  <Col className="d-flex justify-content-end">
                    <Button onClick={this.handleSubmit} variant="primary" type="submit">
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

const Conv = ({ name, title, active }) => (
  <ListGroupItem
    as="li"
    className="d-flex justify-content-between p-2 border-light"
    style={{ backgroundColor: active ? "#eeeeee" : "" }}
  >
    <div style={{ fontSize: "0.95rem" }}>
      <strong>{name}</strong>
      <p className="text-muted">{title}</p>
    </div>
  </ListGroupItem>
);

const ChatMessage = ({ author, when, message, position }) => (
  <ListGroupItem
    as="li"
    className={"chat-message d-flex justify-content-between mb-4 " + position}
  >
    <Card>
      <Card.Body>
        <div>
          <strong className="primary-font">{author}</strong>
          <small className="pull-right text-muted">
            <i className="far" /> {when}
          </small>
        </div>
        <hr />
        <p className="mb-0">{message}</p>
      </Card.Body>
    </Card>
  </ListGroupItem>
);

export default Session;

import React, { Component } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import "../css/App.css";

class AdminVerify extends Component {
  constructor() {
    super();
    this.state = {
      expertArray: [],
      id: "",
      verified: "",
    };
    fetch(`/api/expert`)
      .then((res) => res.json())
      .then((expertArray) => this.setState({ expertArray }));
  }

  render() {
    return (
      <Container className="verify-experts-container">
        <h3 className="text-center my-3">Verify Experts</h3>
        <Row className="table-wrap mt-3 mb-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>isVerified</th>
                <th>Verify</th>
              </tr>
            </thead>
            <tbody>
              {this.state.expertArray.map((expert) => (
                <Expert
                  id={expert.id}
                  username={expert.username}
                  email={expert.email}
                  verified={expert.verified}
                />
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}

const Expert = ({ id, username, email, verified }) => (
  <tr>
    <td>{id}</td>
    <td>{username}</td>
    <td>{email}</td>
    <td style={{ color: verified ? "green" : "red" }}>{verified}</td>
    <td>
      <Button
        onClick={(e) => {
          let data = {
            id: id,
            verified: verified,
          };
          fetch("/api/putVerify", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(data),
          }).then(
            function (res) {
              window.location.reload();
              return res.json();
            }.bind(this)
          );
          e.preventDefault();
        }}
        variant="success"
        size="sm"
      >
        Toggle Verify
      </Button>
    </td>
  </tr>
);

export default AdminVerify;

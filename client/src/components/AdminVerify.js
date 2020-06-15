import React, { Component } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import "../css/App.css";

class AdminVerify extends Component {
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
              <Expert
                id="1"
                username="bill"
                email="bill4ever@gmail.com"
                verified={1}
              />
              <Expert
                id="2"
                username="mhtsos"
                email="eimaomhtsos@gmail.com"
                verified={0}
              />
              <Expert
                id="3"
                username="tsotiri"
                email="eimaithtsotiri@gmail.com"
                verified={1}
              />
              <Expert
                id="3"
                username="tsotiri"
                email="eimaithtsotiri@gmail.com"
                verified={1}
              />
              <Expert
                id="3"
                username="tsotiri"
                email="eimaithtsotiri@gmail.com"
                verified={1}
              />
              <Expert
                id="3"
                username="tsotiri"
                email="eimaithtsotiri@gmail.com"
                verified={1}
              />
              <Expert
                id="3"
                username="tsotiri"
                email="eimaithtsotiri@gmail.com"
                verified={1}
              />
              <Expert
                id="1"
                username="bill"
                email="bill4ever@gmail.com"
                verified={1}
              />
              <Expert
                id="1"
                username="bill"
                email="bill4ever@gmail.com"
                verified={1}
              />
              <Expert
                id="1"
                username="bill"
                email="bill4ever@gmail.com"
                verified={1}
              />
              <Expert
                id="1"
                username="bill"
                email="bill4ever@gmail.com"
                verified={1}
              />
              <Expert
                id="1"
                username="bill"
                email="bill4ever@gmail.com"
                verified={1}
              />
              <Expert
                id="1"
                username="bill"
                email="bill4ever@gmail.com"
                verified={1}
              />
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
      <Button variant="success" size="sm">
        Verify
      </Button>
    </td>
  </tr>
);

export default AdminVerify;

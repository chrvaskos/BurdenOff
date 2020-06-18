import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [content, setContent] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure you want to mark this post as solved? <br />
          You will be able to change the solution in the future.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            var data = {
              cont: content,
              id: sessionStorage.getItem("postId"),
            };

            fetch("/api/putSolution", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              // We convert the React state to JSON and send it as the POST body
              body: JSON.stringify(data),
            }).then(function (res) {
              return res.json();
            });
            props.onHide();
            e.preventDefault();
          }}
        >
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please type your solution to this post.</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              rows="9"
              placeholder="Type here..."
              required
            />
          </Form.Group>
          <Row>
            <Col>
              <Button variant="success" type="submit">
                Add solution
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button variant="danger" onClick={props.onHide}>
                Discard
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

function SolvedButton() {
  const [modalShow, setModalShow] = React.useState(false);
  if (sessionStorage.getItem("verified") === "1") {
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Mark as solved
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  } else return null;
}

export default SolvedButton;

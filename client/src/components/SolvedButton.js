import React from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
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
          This is irreversible.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please type your solution to this post.</Form.Label>
            <Form.Control
              as="textarea"
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
}

export default SolvedButton;

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Bio</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.bio}</Modal.Body>
    </Modal>
  );
}

function BioModal({ bio }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="success" onClick={() => setModalShow(true)}>
        Show Bio
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        bio={bio}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default BioModal;

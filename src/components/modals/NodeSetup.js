import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function NodeSetup(props) {
  return (
    <>
      <Modal
        show={props.show}
        cancel={props.close}
        onHide={props.close}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Setup node</h4>
        </Modal.Body>
      </Modal>
    </>
  );
}
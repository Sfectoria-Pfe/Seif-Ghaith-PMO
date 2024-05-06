import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Avatar } from "@mui/material";
function ClientsDetails({ show, setShow, ClientsData }) {
  const handleClose = () => setShow(false);

  console.log(ClientsData, "this is the data setted");

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="m-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>Clients Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center flex-column">
        <Avatar src={ClientsData?.photo} alt="photo" />
        <p>{ClientsData?.id}</p>
        <p>{ClientsData?.first_name}</p>
        <p>{ClientsData?.last_name}</p>
        <p>{ClientsData?.email}</p>
        <p>{ClientsData?.numero}</p>
        <p>{ClientsData?.adresse}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ClientsDetails;

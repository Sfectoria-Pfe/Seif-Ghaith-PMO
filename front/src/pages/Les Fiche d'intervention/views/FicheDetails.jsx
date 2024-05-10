import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Avatar } from "@mui/material";
function FicheDetails({ show, setShow, fiche_interventionsData }) {
  const handleClose = () => setShow(false);

  console.log(fiche_interventionsData, "this is the data setted");

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="m-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>Fiche_intervention Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center flex-column">
        <p>id:{fiche_interventionsData?.id}</p>
        <p>title:{fiche_interventionsData?.title}</p>
        <p>description:{fiche_interventionsData?.description}</p>
        <p>rapport:{fiche_interventionsData?.rapport}</p>
        <p>status intervention:{fiche_interventionsData?.status}</p>
        <p>status order :{fiche_interventionsData?.status}</p>
        <p>cliendt id :{fiche_interventionsData?.clientId}</p>
        <p>reclamation id :{fiche_interventionsData?.reclamationID}</p>
        
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

export default FicheDetails;




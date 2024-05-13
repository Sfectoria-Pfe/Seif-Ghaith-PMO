import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getfiche_intervention } from "../../../store/fiche_intervention";
function FicheDetails({ show, setShow,fiche }) {
  const handleClose = () => setShow(false);
  console.log(fiche,"hhhhhhhh");


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
        <p>id:{fiche?.id}</p>
        <p>title:{fiche?.OrderReparation?.title}</p>
        <p>description:{fiche?.OrderReparation?.description}</p>
        <p>status intervention:{fiche?.status}</p>
        <p>status order :{fiche?.OrderReparation?.status}</p>
        <p>cliendt id :{fiche?.OrderReparation?.Client?.id}</p>
        <p>reclamation id :{fiche?.OrderReparation?.Reclamation?.id}</p>
        {fiche?.details?.map((item, index) => (
          <>
        <p>etapeTitle:{item?.title}</p>
        <p>rapportTitle:{item?.rapport}</p>
        </>

      ))}
        
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




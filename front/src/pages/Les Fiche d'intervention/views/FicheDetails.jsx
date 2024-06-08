import React, { useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getfiche_intervention } from "../../../store/fiche_intervention";

import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
import { useReactToPrint } from "react-to-print";

function FicheDetails({ show, setShow, fiche }) {
  const handleClose = () => setShow(false);
  console.log(fiche, "hhhhhhhh");
  const componentRef = useRef();
  console.log(componentRef);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
      <Modal.Body 
      ref={componentRef}
      className="d-flex align-items-center justify-content-center flex-column">
        <Card
          variant="outlined"
          sx={{
            width: 520,
            // to make the card resizable
            overflow: "auto",
            // resize: "horizontal",
          }}

        >
          <p>id: {fiche?.id}</p>
          <p>title: {fiche?.OrderReparation?.title}</p>
          <p>description: {fiche?.OrderReparation?.description}</p>
          <p>status intervention: {fiche?.status}</p>
          <p>status order: {fiche?.OrderReparation?.status}</p>
          <p>cliendt id: {fiche?.OrderReparation?.Client?.id}</p>
          <p>reclamation id: {fiche?.OrderReparation?.Reclamation?.id}</p>
        </Card>

        {fiche?.details?.map((item, index) => (
          <Card
            variant="outlined"
            sx={{
              marginTop: 3,
              width: 520,
              // to make the card resizable
              overflow: "auto",
              // resize: "horizontal",
            }}
          >
            <p>Titre etape : {item?.title}</p>
            <p>description : {item?.description}</p>
            <p>rapport : {item?.rapport}</p>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button onClick={handlePrint}>Imprimer</button>
      </Modal.Footer>
    </Modal>
  );
}

export default FicheDetails;

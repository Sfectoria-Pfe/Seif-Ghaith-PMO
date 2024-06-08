import React from "react";
import Modal from "react-bootstrap/Modal";

import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box"; 
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
function ClientsDetails({ show, setShow, ClientsData }) {
  const handleClose = () => setShow(false);

  console.log(ClientsData, "this is the data setted");

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      className="m-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>Clients Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center flex-column">
        <Card
          variant="outlined"
          sx={{
            width: 420,
            // to make the card resizable
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Avatar src={ClientsData?.photo} size="lg" />
          </Box>
          <CardContent>
            <Typography level="title-lg">
              {ClientsData?.first_name} {ClientsData?.last_name}
            </Typography>
            <Typography level="body-sm">
              <p> ID :{ClientsData?.id}</p>
              <p>Email :{ClientsData?.email}</p>
              <p>Numero :{ClientsData?.numero}</p>
              <p>Adresse :{ClientsData?.adresse}</p>
            </Typography>
          </CardContent>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ClientsDetails;

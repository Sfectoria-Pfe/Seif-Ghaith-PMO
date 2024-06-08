import React from "react";
import Modal from "react-bootstrap/Modal";

import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

function EmployeeDetails({ show, setShow, employeeData }) {
  const handleClose = () => setShow(false);

  console.log(employeeData, "this is the data setted");

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      className="m-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>Employee Details</Modal.Title>
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
            <Avatar src={employeeData?.photo} size="lg" />
          </Box>
          <CardContent>
            <Typography level="title-lg">
              {employeeData?.first_name} {employeeData?.last_name}
            </Typography>
            <Typography level="body-sm">
              <p> ID :{employeeData?.id}</p>
              <p>Email :{employeeData?.email}</p>
              <p>Numero :{employeeData?.numero}</p>
              <p>Adresse :{employeeData?.adresse}</p>
              <p>Role :{employeeData?.role}</p>

            </Typography>
          </CardContent>
        </Card>

        {/* <Avatar src={employeeData?.photo} alt="photo" /> */}
        {/* <p>{employeeData?.id}</p> */}
        {/* <p>{employeeData?.first_name}</p> */}
        {/* <p>{employeeData?.last_name}</p> */}
        {/* <p>{employeeData?.role}</p> */}
        {/* <p>{employeeData?.email}</p>
        <p>{employeeData?.numero}</p>
        <p>{employeeData?.adresse}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default EmployeeDetails;

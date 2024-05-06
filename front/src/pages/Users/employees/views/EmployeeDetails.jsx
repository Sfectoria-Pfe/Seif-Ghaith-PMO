import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Avatar } from "@mui/material";
function EmployeeDetails({ show, setShow, employeeData }) {
  const handleClose = () => setShow(false);

  console.log(employeeData, "this is the data setted");

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="m-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>Employee Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center flex-column">
        <Avatar src={employeeData?.photo} alt="photo" />
        <p>{employeeData?.id}</p>
        <p>{employeeData?.first_name}</p>
        <p>{employeeData?.last_name}</p>
        <p>{employeeData?.role}</p>
        <p>{employeeData?.email}</p>
        <p>{employeeData?.numero}</p>
        <p>{employeeData?.adresse}</p>
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

export default EmployeeDetails;

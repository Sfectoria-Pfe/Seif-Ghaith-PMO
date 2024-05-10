import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function OrderReparationDetails({ show, setShow, id }) {
  const handleClose = () => setShow(false);
  console.log(id);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="m-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center flex-column">
        <p>{id?.id}</p>
        <p>{id?.title}</p>
        <p>{id?.description}</p>
        <p>{id?.status}</p>
        <p>{id?.date}</p>
        <p>------------------------------</p>
        <p>{id?.Client?.id}</p>
        <p>{id?.Client?.first_name}</p>
        <p>{id?.Client?.last_name}</p>
        <p>{id?.Client?.email}</p>
        <p>--------------------------------</p>
        <p>{id?.Reclamation?.id}</p>
        <p>{id?.Reclamation?.image}</p>
        <p>{id?.Reclamation?.titel}</p>
        <p>{id?.Reclamation?.description}</p>
        <p>---------------------------------</p>
        {id?.etape?.map((item, index) => (
          <>
            <h5>etap n {index + 1} </h5>
            <p>{item?.title}</p>
            <p>{item?.description}</p>
            <p>{item?.type}</p>
            <p>{item?.rapport}</p>
            <p>{item?.status}</p>
            <p>{item?.date}</p>

          </>
        ))}
        <p>-------------------------------------</p>
        <p>{id?.EntreeDevice?.id}</p>
        <p>{id?.EntreeDevice?.title}</p>
        <p>{id?.EntreeDevice?.description}</p>
        <p>{id?.EntreeDevice?.image}</p>
        <p>{id?.EntreeDevice?.rapport}</p>
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

export default OrderReparationDetails;

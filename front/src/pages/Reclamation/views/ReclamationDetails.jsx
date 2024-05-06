import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReclamationDetails({ reclamation, onClose }) {
  console.log(reclamation,"reclamation")
  return (
    <Modal className='m-5' show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reclamation Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {reclamation.id}</p>
        <p>Client Name: {reclamation?.Client?.first_name}</p>
        <p>Title: {reclamation.titel}</p>
        <p>Description: {reclamation.description}</p>
        <p>Created At: {reclamation.createdAt}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default ReclamationDetails;
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EntreeDeviceDetails({ entree_device, onClose }) {
    console.log(entree_device,"this is the bond entree")
  
  return (
    <Modal className='m-5' show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bond Entreé Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {entree_device?.id}</p>
        <p>Client Name: {entree_device?.Client?.first_name}</p>
        <p>Title: {entree_device?.title}</p>
        <p>Description: {entree_device?.description}</p>
        <p>Created At: {entree_device?.createdAt}</p>
        <p>Statues: {entree_device?.statues}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default EntreeDeviceDetails;
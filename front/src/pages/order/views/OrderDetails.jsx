import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OrderDetails({ order, onClose }) {
  console.log(order,"order")
  return (
    <Modal className='m-5' show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {order.id}</p>
        <p>Client Name: {order?.Client?.first_name}</p>
        <p>Name: {order.name}</p>
        <p>Description: {order.description}</p>
        <p>Created At: {order.createdAt}</p>
        <p>Confirm: {order.confirm}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default OrderDetails;
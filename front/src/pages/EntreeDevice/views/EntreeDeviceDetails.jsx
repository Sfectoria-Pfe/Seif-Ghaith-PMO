import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getentree_device } from '../../../store/entree_device';
import { useEffect } from 'react';
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box"; 
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";

function EntreeDeviceDetails({ entree_device, onClose }) {
  const entree = useSelector((state) => state.entree_device.entree_device);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getentree_device(+entree_device?.id));
  }, []);
  console.log(entree,"this is the bond entree")
    return (
    <Modal size="lg"className='m-5' show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bons Entreé Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className='row'>
        <div className='col-6'>
        <Card
        variant="outlined"
        sx={{
          width: 380,
          height:207,
          // to make the card resizable
          overflow: "auto",
          // resize: "horizontal",
        }}
        >

        <p>ID: {entree_device?.id}</p>
        <p>Title: {entree_device?.title}</p>
        <p>Description: {entree_device?.description}</p>
        <p>Created At: {entree_device?.createdAt}</p>
        <p>deja traité en Order de reparation : {entree.Orders?.length===0 ? "Non🟥" : "Oui🟩"}</p>
        </Card>
        </div>
        <div className='col-5'>
        <Card
          variant="outlined"
          sx={{
            width: 320,
            // to make the card resizable
            overflow: "auto",
            // resize: "horizontal",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Avatar src={entree.Client?.photo} size="lg" />
          </Box>
          <CardContent>
            <Typography level="title-lg">
              {entree.Client?.first_name} {entree.Client?.last_name}
            </Typography>
            <Typography level="body-sm">
              <p> ID :{entree.Client?.id}</p>
              <p>Email :{entree.Client?.email}</p>
              <p>Numero :{entree.Client?.numero}</p>
              <p>Adresse :{entree.Client?.adresse}</p>
              
            </Typography>
          </CardContent>
        </Card>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default EntreeDeviceDetails;
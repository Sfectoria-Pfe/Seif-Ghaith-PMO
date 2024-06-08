import Modal from "react-bootstrap/Modal";
import { getreclamation } from "../../../store/reclamation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
function ReclamationDetails({ reclamation, onClose }) {
  const rec = useSelector((state) => state.reclamation?.reclamation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getreclamation(+reclamation?.id));
  }, []);
console.log(rec,"thiiiiiiissss isss rssseccccccdddddddddcccccccccccc")
  return (
    <Modal className="m-5" size="lg" show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reclamation Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="row">
        <div className="col-6">
          <Card
            variant="outlined"
            sx={{
              width: 380,
              // to make the card resizable
              overflow: "auto",
              // resize: "horizontal",
            }}
          >
            <p>ID: {reclamation?.id}</p>
            <p>Nom du client: {reclamation?.Client?.first_name}</p>
            <p>Titre: {reclamation?.titel}</p>
            <p>Description: {reclamation?.description}</p>
            <p>Created At: {reclamation?.createdAt}</p>
            <p>
            <p>deja traité en bon d'entree : {rec?.Entrees?.length===0 ? "Non🟥" : "Oui🟩"}</p>

            </p>
          </Card>
        </div>
        <div className="col-5">
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
              <Avatar src={rec.Client?.photo} size="lg" />
            </Box>
            <CardContent>
              <Typography level="title-lg">
                {rec.Client?.first_name} {rec.Client?.last_name}
              </Typography>
              <Typography level="body-sm">
                <p> ID :{rec.Client?.id}</p>
                <p>Email :{rec.Client?.email}</p>
                <p>Numero :{rec.Client?.numero}</p>
                <p>Adresse :{rec.Client?.adresse}</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReclamationDetails;

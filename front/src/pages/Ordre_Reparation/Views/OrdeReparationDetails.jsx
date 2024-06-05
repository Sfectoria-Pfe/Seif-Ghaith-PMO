import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { useRef } from "react";
import Typography from "@mui/joy/Typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { useReactToPrint } from "react-to-print";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function OrderReparationDetails({ show, setShow, id }) {
  // const orr = useSelector((state) => state.orderreparation.orderreparation);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getorderreparation());
  // }, []);
  const handleClose = () => setShow(false);
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
      aria-labelledby="contained-modal-title-center"
      className="m-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="row" ref={componentRef}>
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
            <h5>Info de l'order de reparation :</h5>
            <p>ID: {id?.id}</p>
            <p>Titre: {id?.title}</p>
            <p>Description: {id?.description}</p>
            <p>Status: {id?.status}</p>
            <p>Date de traitement:{id?.date}</p>
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
              <Avatar src={id.Client?.photo} size="lg" />
            </Box>
            <CardContent>
              <Typography level="title-lg">
                {id.Client?.first_name} {id.Client?.last_name}
              </Typography>
              <Typography level="body-sm">
                <p> ID :{id.Client?.id}</p>
                <p>Email :{id.Client?.email}</p>
                <p>Numero :{id.Client?.numero}</p>
                <p>Adresse :{id.Client?.adresse}</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="row pt-3">
          <Table className="">
            <TableHead>
              <TableRow>
                <StyledTableCell className="">num</StyledTableCell>
                <StyledTableCell className="">titre</StyledTableCell>
                <StyledTableCell className="">description</StyledTableCell>
                <StyledTableCell className="">type</StyledTableCell>
                <StyledTableCell className="">rapport</StyledTableCell>
                <StyledTableCell className="">status</StyledTableCell>
                <StyledTableCell className="">date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {id?.etape?.map((item, index) => (
                <TableRow>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{item?.title}</StyledTableCell>
                  <StyledTableCell>{item?.description}</StyledTableCell>
                  <StyledTableCell>{item?.type}</StyledTableCell>
                  <StyledTableCell>{item?.rapport}</StyledTableCell>
                  <StyledTableCell>{item?.status}</StyledTableCell>
                  <StyledTableCell>{item?.date}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* <p>-------------------------------------</p>
        <p>{id?.EntreeDevice?.id}</p>
        <p>{id?.EntreeDevice?.title}</p>
        <p>{id?.EntreeDevice?.description}</p>
        <p>{id?.EntreeDevice?.image}</p>
        <p>{id?.EntreeDevice?.rapport}</p> */}
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

export default OrderReparationDetails;

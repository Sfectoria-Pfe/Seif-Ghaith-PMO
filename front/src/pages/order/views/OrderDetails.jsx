import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { Button } from "@mui/material";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import { FaRegWindowClose } from "react-icons/fa";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
// import  { getorder } from "../../../store/order";
import Modal from 'react-bootstrap/Modal';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  strong: {
    fontWeight: 'bold',
  },
});

function OrderDetails({order,onClose}) {
  console.log(order,"this is order")
  // const dispatch = useDispatch();
  // const { id } = useParams(); 
  // const order = useSelector((state) => state.order.order);
  // const loading = useSelector((state) => state.order.order);

  const [pdfExported, setPdfExported] = useState(false);

  // useEffect(() => {
  //   dispatch(getorder(+id)); 
    
  // }, [dispatch,+id]);

  const handleExportPDF = () => {
    setPdfExported(true);
  };
  function GenerateInvoice() {
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: [612, 792]
      });
      pdf.internal.scaleFactor = 1;
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice-001.pdf');
    });
  }
  return (
      <div>
        <Modal className="m-5" show={true} size="lg">
        
          <div id="invoiceCapture" >
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
              <div className="w-100">
                <h4 className="fw-bold my-2">{order?.Client?.first_name}</h4>
                <h6 className="fw-bold text-secondary mb-1">
                  Facture #: {order?.id}
                </h6>
              </div>
             
              <div className="text-end ms-4">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
                <h5 className="fw-bold text-secondary"> {order?.currency} {order?.total}</h5>
              </div>
            </div>
            
            <div className="p-4 gap-4">
              <Row className="mb-4">
                <Col md={4}>
                  <div className="fw-bold">information de client</div>
                  <div>{order?.Client?.first_name}</div>
                  <div>{order?.Client?.email}</div>
                  <div>{order?.Client?.adresse}</div>
                 

                </Col>
                <Col md={4}>
                  <div className="fw-bold">information de entreprise</div>
                  <div>{'DATASERV'}</div>
                  <div>{'dataserv@gmail.coom'}</div>
                  <div>{'montplaisire'}</div>
                  <div>{'20111300'}</div>

                </Col>
                <Col md={4}>
                  <div className="fw-bold mt-2">Date Of Issue:</div>
                  <div>{order?.dateOfIssue}</div>
                </Col>
              </Row>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th>QTY</th>
                    <th>ITEM</th>
                    <th className="text-end">PRICE</th>
                    <th className="text-end">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.orderline?.map((item, i) => {
                    return (
                      <tr id={i} key={i}>
                        <td style={{width: '70px'}}>
                          {item.quantity}
                        </td>
                        <td>
                          {item.item} 
                        </td>
                        <td className="text-end" style={{width: '100px'}}>{order?.currency}  {item.prix_unitaire}</td>
                        <td className="text-end" style={{width: '100px'}}>{order?.currency}  {item.prix_unitaire * item.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Table>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{width: '100px'}}>SUBTOTAL</td>
                    <td className="text-end" style={{width: '100px'}}>{order?.currency}  {order?.subTotal}</td>
                  </tr>
                  {order?.taxAmmount != 0.00 &&
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{width: '100px'}}>TAX</td>
                      <td className="text-end" style={{width: '100px'}}>{order?.currency}  {order?.taxAmmount}</td>
                    </tr>
                  }
                  {order?.discountAmmount != 0.00 &&
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{width: '100px'}}>DISCOUNT</td>
                      <td className="text-end" style={{width: '100px'}}>{order?.currency}  {order?.discountAmmount}</td>
                    </tr>
                  }
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{width: '100px'}}>TOTAL</td>
                    <td className="text-end" style={{width: '100px'}}>{order?.currency}  {order?.total}</td>
                  </tr>
                </tbody>
              </Table>
              {order?.notes &&
                <div className="bg-light py-3 px-4 rounded">
                  {order?.notes}
                </div>}
            </div>
          </div>
          <div className="pb-4 px-4">
            <Row>
              <Col md={6}>
                <Button variant="primary" className="d-block w-100" onClick={onClose}>
                  <FaRegWindowClose style={{width: '15px', height: '15px', marginTop: '-3px'}} className="me-2"/>close
                </Button>
              </Col>
              <Col md={6}>
                <Button variant="outline-primary" className="d-block w-100 mt-3 mt-md-0" onClick={GenerateInvoice}>
                  <BiCloudDownload style={{width: '16px', height: '16px', marginTop: '-3px'}} className="me-2"/>
                  Download Copy
                </Button>
              </Col>
            </Row>
          </div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveAltIcon />}
        onClick={handleExportPDF}
      >
      </Button>
      {pdfExported && (
        <PDFViewer width="100%" height={600}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.strong}>Numéro de devis:</Text>
                <Text>{order.numero_order}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.strong}>Date d'estimation:</Text>
                <Text>{order.date_estimation}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.strong}>Montant total:</Text>
                <Text>{order.montant_total}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.strong}>Prix unitaire:</Text>
                <Text>{order.prix_unitaire}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.strong}>Service:</Text>
                <Text>{order.service}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.strong}>TVA:</Text>
                <Text>{order.TVA}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.strong}>Client:</Text>
                <Text>{order.client?.nom} {order.client?.prenom}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
           
        </Modal>
        <hr className="mt-4 mb-3"/>
      </div>
  );
}

export default OrderDetails;
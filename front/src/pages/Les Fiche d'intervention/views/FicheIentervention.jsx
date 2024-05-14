import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { deletefiche_intervention, getfiche_interventions } from '../../../store/fiche_intervention';
import FicheDetails from './FicheDetails';

function Fiche_intervention() {

    const dispatch = useDispatch();
    const store = useSelector((state) => state.fiche_intervention.fiche_interventions);
    console.log(store, "fssssrom storee");

    const [show, setShow] = useState(false);
    const [id, setId] = useState(false);
    const [selectedFiche, setSelectedFiche] = useState(null);

    useEffect(() => {
        dispatch((getfiche_interventions()));
      }, [dispatch]);
      
      const handledelete = (id) => {
        dispatch(deletefiche_intervention(id));
      };
      const navigate = useNavigate();
      const handleEdit = (id) => {
        navigate(`editfiche/${+id}`);
      };
    

      const handleShow = (id) => {
        const selected = store.find((fiche) => fiche.id === id); // Find fiche with the given id
        setSelectedFiche(selected);
        setShow(true);
      };
    
      const rows = store.map((row) => ({
        id: row.id,
        idr: row.OrderReparation?.id,
        title: row.OrderReparation?.title,
        description: row.OrderReparation?.description,
        rapport: row.OrderReparation?.rapport,
        status: row.status,
        statusr: row.OrderReparation?.status,
        reclamationID: row.OrderReparation?.reclamationId,
        clientID: row.OrderReparation?.clientId,
      }));
    
      const columns = [
        { field: "id", headerName: "ID", width: 30, filterable: false },
        { field: "idr", headerName: "ID OR", width: 30, filterable: false },
        { field: "title", headerName: "title", width: 200 },
        { field: "description", headerName: "description", width: 150 },
        { field: "rapport", headerName: "Rapport", width: 150 },
        { field: "status", headerName: "Status", width: 200 },
        { field: "statusr", headerName: "Status OR", width: 200 },
        { field: "reclamationID", headerName: "reclamation ID", width: 150 },
        { field: "clientID", headerName: "Client ID", width: 200 },
        { field: "Action", headerName: "Action", width: 200 ,cellClassName: 'actions',
        renderCell: (params) => {
          console.log(params.row,"this is the params")
          return ( <div>
            <VisibilityIcon onClick={() => handleShow(params.row.id)}/>
            <DeleteIcon onClick={() => handledelete(params.row.id)}/>
            
            <EditIcon onClick={() => handleEdit(params.row.id)}/>
    
          </div>)
    
          }
         },
        
      ];
      return (
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Liste des fiche_interventions
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Voir des informations sur tous les fiche_interventions.
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link to={"addfiche_intervention"}>
                  <Button> Ajouter un fiche_intervention </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* <div className="w-full md:w-72">
                <Input
                  onChange={(e) => dispatch(filterfiche_interventions_lastname(e.target.value))}
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div> */}
            </div>
          </CardHeader>
          <CardBody>
            <div style={{ height: 500, width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={rows}
                slots={{ toolbar: GridToolbar }}
              />
            </div>
          </CardBody>
          {show && <FicheDetails show={show} setShow={setShow} fiche={selectedFiche} />}
  </Card>
  )
}

export default Fiche_intervention
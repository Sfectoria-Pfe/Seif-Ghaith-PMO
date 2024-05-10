import { useSelector, useDispatch } from "react-redux";
import {
  deletefiche_intervention,
  // filterfiche_interventions_lastname,
  getfiche_interventions,
} from "../../../store/fiche_intervention";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FicheDetails from "./FicheDetails";

export default function Fiche_intervention() {
  const [show, setShow] = useState(false);
  const [update, setupdate] = useState(true);
  const Store = useSelector((state) => state.fiche_intervention);
  const [fiche_interventionData, setfiche_interventionData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getfiche_interventions());
  }, [update]);
  const Rows = Store.fiche_interventions.map((row) => {
    return {
      id: row.id,
      idr: row.OrderReparation?.id,
      title:row.OrderReparation?.title,
      description: row.OrderReparation?.description,
      rapport: row.OrderReparation?.rapport,
      status:row.status,
      statusr:row.OrderReparation?.status,
      reclamationID:row.OrderReparation?.reclamationId,
      clientID:row.OrderReparation?.clientId,
    };
  });

  const navigate = useNavigate();

  const handledelete = (data) => {
    dispatch(deletefiche_intervention(data));
  };

  const handleEdit = (data) => {
    setfiche_interventionData(data.id);
    navigate(`editfiche_intervention/${+data.id}`);
  };

  const handleShow = (data) => {
    setShow(true);
    setfiche_interventionData(data);
  };

  console.log(Store.fiche_interventions);
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
        <VisibilityIcon onClick={() => handleShow(params)}/>
        <DeleteIcon onClick={() => handledelete(params.id)}/>
        
        <EditIcon onClick={() => handleEdit(params)}/>
        
      </div>)}}

    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="h-100 w-100 d-flex justify-content-around align-items-center">
    //         <VisibilityIcon
    //           onClick={() => {
    //             handleShow(params);
    //           }}
    //         />
    //         <DeleteIcon
    //           onClick={() => {
    //             // console.log(params.id)
    //             handledelete(params.id);
    //           }}
    //         />
    //         <EditIcon
    //           onClick={() => {
    //             // console.log(params.id)
    //             handleEdit(params);
    //           }}
    //         />
    //       </div>
    //     );
    //   },
    // },
  ];
console.log(Store.fiche_interventions.find((e)=>e.id === fiche_interventionData.id ),"this is gaith")
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
          <div className="w-full md:w-72">
            {/* <Input
              onChange={(e) => dispatch(filterfiche_interventions_lastname(e.target.value))}
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            /> */}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={Rows}
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </CardBody>
      <FicheDetails
        show={show}
        setShow={setShow}
        fiche_interventionsData={fiche_interventionData?.row}
      />
    </Card>
  );
}

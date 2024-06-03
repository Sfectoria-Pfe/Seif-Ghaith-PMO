import { useSelector, useDispatch } from "react-redux";
import {
  deleteclient,
  filterclients_lastname,
  getclients,
} from "../../../../store/client";
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
import ClientsDetails from "./ClientsDetails";

export default function Clients() {
  const [show, setShow] = useState(false);
  const [update, setupdate] = useState(true);
  const Store = useSelector((state) => state.client);
  const [clientData, setclientData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getclients());
  }, [update]);
  const Rows = Store.clients.map((row) => {
    return {
      id: row.id,
      photo: row.photo,
      first_name: row?.first_name+"   "+row?.last_name,
      // last_name: row.last_name,
      adresse: row?.adresse,
      email: row?.email,
      numero: row?.numero,
    };
  });

  const navigate = useNavigate();

  const handledelete = (data) => {
    dispatch(deleteclient(data));
  };

  const handleEdit = (data) => {
    setclientData(data.id);
    navigate(`editClient/${+data.id}`);
  };

  const handleShow = (data) => {
    setShow(true);
    setclientData(data);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      headerAlign: "center",align:"center",
      filterable: false,
    },
    {
      field: "photo",
      headerName: "",
      width: 30,
      headerAlign: "center",align:"center",

      renderCell: (params) => {
        return <Avatar alt="Remy Sharp" src={params.row.photo} />;
      },
    },
    {
      field: "first_name",
      headerName: "Nom et prenom",
      width: 150,
      headerAlign: "center",align:"center",
      align:"center"
    },
    // {
    //   field: "last_name",
    //   headerName: "last_name",
    //   width: 150,
    //   headerAlign: "center",align:"center",
    // },
    {
      field: "adresse",
      headerName: "adresse",
      width: 150,
      headerAlign: "center",align:"center",
    },
    { field: "email", headerName: "Email", width: 200, headerAlign: "center" ,align:"center",},
    {
      field: "numero",
      headerName: "numero", 
      width: 200,
      headerAlign: "center",align:"center",
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      headerAlign: "center",align:"center",
      renderCell: (params) => {
        return (
          <div className="h-100 w-100 d-flex justify-content-around align-items-center">
            <VisibilityIcon
              onClick={() => {
                handleShow(params);
              }}
            />
            <DeleteIcon
              onClick={() => {
                // console.log(params.id)
                handledelete(params.id);
              }}
            />
            <EditIcon
              onClick={() => {
                handleEdit(params);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des Clients
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir des informations sur tous les Clients.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to={"addclient"}>
              <Button> Ajouter un Client </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              onChange={(e) => dispatch(filterclients_lastname(e.target.value))}
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
           pageSizeOptions={[5, 10]}
           disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  page: 0,
                  pageSize: 4,
                },
              },
            }}
            columns={columns}
            rows={Rows}
            slots={{ toolbar: GridToolbar }}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </div>
      </CardBody>
      <ClientsDetails
        show={show}
        setShow={setShow}
        ClientsData={clientData?.row}
      />
    </Card>
  );
}

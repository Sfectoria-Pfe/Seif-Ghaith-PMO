import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { getorderreparations } from "../../../store/order_reparation";
import OrderReparationDetails from "./OrdeReparationDetails";

function OrdreReparation() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.orderreparation.orderreparations);
  console.log(store, "fssssrom storee");

  const [show, setShow] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    dispatch(getorderreparations());
  }, [dispatch]);

  const handleShow = (id) => {
    setShow(true);
    setId(store[id - 1]);
  };
  const rows = store.map((row) => {
    let xd = "";
    if (row.etape && row.etape.length > 0) {
      xd = row.etape[0].title;
    } else {
      xd = "rahi undefined";
    }

    return {
      id: row?.id,
      title: row?.title,
      titleetape: xd,
      description: row?.description,
      entreeDeviceId: row?.entreeDeviceId
        ? row?.EntreeDevice.title
        : "pas defini",
      status: row.status,
      nomclient: row.Client?.first_name + "  " + row.Client?.last_name,
    };
  });
  const navigate = useNavigate();
 
  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "title",
      headerName: "title",
      width: 200,
    },

    {
      field: "titleetape",
      headerName: "etape",
      width: 200,
    },

    { field: "description", headerName: "description", width: 200 },
    {
      field: "entreeDeviceId",
      headerName: "Titre de band d'entree",
      width: 200,
    },
    {
      field: "status",
      headerName: "status",
      width: 90,
    },
    {
      field: "nomclient",
      headerName: "nomclient",
      width: 250,
    },
    {
      field: "ajout",
      headerName: "Ajouter une etape",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="h-50 w-75 d-flex justify-content-around align-items-center">
            <Button
              onClick={() => {
                navigate(`addetape/${params.row.id}`);
              }}
            >
              Ajouter une etape
            </Button>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="h-100 w-100 d-flex justify-content-around align-items-center">
            <VisibilityIcon
              onClick={() => {
                handleShow(params.row.id);
              }}
            />
            <DeleteIcon
              onClick={() => {
                // handledelete(params.id);
              }}
            />
            <EditIcon
              onClick={() => {
               navigate(`editorder/${params.row.id}`)
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
              Liste des Orders de reparation
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to={"addorderreparation"}>
              <Button> Ajouter Oreder reparation </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              //    onChange={(e) =>
              //       dispatch(filterentree_lastname(e.target.value))
              //   }
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
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
      <OrderReparationDetails show={show} setShow={setShow} id={id} />
    </Card>
  );
}

export default OrdreReparation;

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
  const myInfo = useSelector((state) => state.auth.me);
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

  console.log(myInfo, "me");
  const rows = store.filter((row) => {
    if (row?.employeeId === myInfo.Employee.id) {
      return row;
    }
    if (myInfo.Employee.role === "admin"||myInfo.Employee.role === "manager") {
      return row;
    }
  });

  const frow = rows.map((row) => {
    let xd = "";
    if (row.etape && row.etape.length > 0) {
      xd = row.etape[0].title;
    } else {
      xd = "aucune etape n'été pas effectuée";
    }
    return {
      id: row?.id,
      title: row?.title,
      titleetape: xd,
      description: row?.description,
      entreeDeviceId: row?.entreeDeviceId
        ? row?.EntreeDevice?.title
        : "pas defini",
      status: row.status,
      nomclient: row?.Client?.first_name + " " + row?.Client?.last_name,
    };
  });
  const navigate = useNavigate();

  const columns = [
    {
      headerAlign: "center",
      align: "center",
      field: "id",
      headerName: "ID",
      width: 30,
    },
    {
      headerAlign: "center",
      align: "center",
      field: "title",
      headerName: "titre",
      width: 200,
    },

    {
      headerAlign: "center",
      align: "center",
      field: "titleetape",
      headerName: "etape",
      width: 300,
    },

    {
      headerAlign: "center",
      align: "center",
      field: "description",
      headerName: "description",
      width: 350,
    },
    // {
    //  headerAlign: "center" ,align:"center", field: "entreeDeviceId",
    //   headerName: "Titre de band d'entree",
    //   width: 200,
    // },
    {
      headerAlign: "center",
      align: "center",
      field: "status",
      headerName: "status",
      width: 90,
    },
    // {
    //   headerAlign: "center",
    //   align: "center",
    //   field: "nomclient",
    //   headerName: "nomclient",
    //   width: 250,
    // },
    {
      headerAlign: "center",
      field: "ajout",
      headerName: "Ajouter une etape",
      width: 170,

      renderCell: (params) => {
        return (
          <>
            {(myInfo.Employee.role === "admin" ||
              myInfo.Employee.role === "receptionist" ||
              myInfo.Employee.role === "manager" ||
              myInfo.Employee.role === "technicien") && (
              <div className="h-50 w-25 d-flex justify-content-around align-items-center">
                <Button
                  variant="text" size="sm" className="rounded-full"
                  onClick={() => {
                    navigate(`addetape/${params.row.id}`);
                  }}
                >
                  Ajouter
                  etape
                </Button>
              </div>
            )}
          </>
        );
      },
    },
    {
      headerAlign: "center",
      align: "center",
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
            {(myInfo.Employee.role === "admin" ||
              myInfo.Employee.role === "manager") && (
              <>
                <DeleteIcon
                  onClick={() => {
                    // handledelete(params.id);
                  }}
                />
              </>
            )}
            <EditIcon
              onClick={() => {
                navigate(`editorder/${params.row.id}`);
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
            <Typography color="gray" className="mt-1 font-normal">
              Voir les informations sur les order de reparation.
            </Typography>
          </div>
          {(myInfo.Employee.role === "admin" ||
            myInfo.Employee.role === "manager") && (
            <>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link to={"addorderreparation"}>
                  <Button> Ajouter Order reparation </Button>
                </Link>
              </div>
            </>
          )}
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
            rows={frow}
            slots={{ toolbar: GridToolbar }}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />
        </div>
      </CardBody>
      <OrderReparationDetails show={show} setShow={setShow} id={id} />
    </Card>
  );
}

export default OrdreReparation;

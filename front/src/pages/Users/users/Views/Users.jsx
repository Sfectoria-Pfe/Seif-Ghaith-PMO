import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Link, useNavigate } from "react-router-dom";
import { getUsers, updateUser } from "../../../../store/user";
import { ToastContainer, toast } from "react-toastify";

export default function Users() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user.users);
  // console.log(store, "from storee");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [data, setData] = useState();

  async function handli(idrow, isActive) {
    // setData(store[idrow])
    // console.log(active)
    // setData({isActive:(!active)})
    // console.log(data)
    const args = { id: +idrow, body: { isActive } };
    await dispatch(updateUser(args))
      .then((res) => {
        if (!res.error) {
          toast.success("utilisateur desactiver avec succès !");
        } else {
          toast.error("Erreur. Veuillez réessayer.");
        }
      })
      .catch(() => {
        toast.error(
          "Erreur lors de modification du bond entree. Veuillez réessayer."
        );
      });
  }

  const Rows = store.map((row) => {
    return {
      id: row?.id,
      email: row?.email,
      isactive: row?.isActive,
      isclient: row?.isClient,
      nom: row.Client?.first_name,
      nomEmp: row.Employee?.first_name,
      prenom: row.Client?.last_name,
      prenomEmp: row.Employee?.last_name,
    };
  });

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
      field: "nom",
      headerName: "nom",
      width: 200,
      renderCell: (params) => {
        if (params.row.isclient === true) {
          return params.row.nom;
        } else {
          return params.row.nomEmp;
        }
      },
    },

    {
      headerAlign: "center",
      align: "center",
      field: "prenom",
      headerName: "prenom",
      width: 200,
      renderCell: (params) => {
        if (params.row.isclient === true) {
          return params.row.prenom;
        } else {
          return params.row.prenomEmp;
        }
      },
    },

    {
      headerAlign: "center",
      align: "center",
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      headerAlign: "center",
      align: "center",
      field: "isclient",
      headerName: "Client / Employee",
      width: 200,
      renderCell: (params) => {
        if (params.row.isclient === true) {
          return "Client";
        } else {
          return "Employee";
        }
      },
    },
    {
      headerAlign: "center",
      align: "center",
      field: "isactive",
      headerName: "is active",
      width: 90,
      renderCell: (params) => {
        if (params.row.isactive === true) {
          return "🟢";
        } else {
          return "🔴";
        }
      },
    },
    {
      headerAlign: "center",
      align: "center",
      field: "action",
      headerName: "action",
      width: 100,
      renderCell: (params) => {
        return (
          <Button variant="outlined"
          size="sm"
            onClick={() => {
              // console.log(params.id)
              handli(params.row.id, !params.row.isactive);
            }}
          >
            {" "}
            action{" "}
          </Button>
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
              Liste des Utilisateurs
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir des informations sur tous les Utilisateurs.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to={"addUser"}>
              <Button> Ajouter utilisateur </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            {/* <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={(e) =>
                dispatch(filteremployees_lastname(e.target.value))
              }
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
                  page: 0,
                  pageSize: 10,
                },
              },
            }}
          />
        </div>
        <ToastContainer className="toast-position" position="bottom-center" />
      </CardBody>
    </Card>
  );
}

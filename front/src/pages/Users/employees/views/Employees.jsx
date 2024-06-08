import { useSelector, useDispatch } from "react-redux";
import {
  deleteemployee,
  filteremployees_lastname,
  getemployees,
} from "../../../../store/empolyee";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import EditIcon from "@mui/icons-material/Edit";
import EditEmployee from "./EditEmployee";
export default function Employees() {
  const dispatch = useDispatch();
  const employeeStore = useSelector((state) => state.employee);

  const [show, setShow] = useState(false);
  const [employeeData, setEmployeeData] = useState({});
  const navigate = useNavigate();
  const handleShow = (data) => {
    setShow(true);
    setEmployeeData(data);
  };
  const handledelete = (data) => {
    dispatch(deleteemployee(data));
  };
  const myInfo = useSelector((state) => state.auth.me);

  const handleEdit = (data) => {
    setEmployeeData(data.id);
    console.log(data.id, "sfsfd");
    navigate(`editEmployee/${+data.id}`);
  };

  useEffect(() => {
    dispatch(getemployees());
  }, [dispatch]);
  const Rows = employeeStore.employees?.map((row) => {
    return {
      id: row?.id,
      photo: row?.photo,
      first_name: row?.first_name + "   " + row?.last_name,
      // last_name: row?.last_name,
      role: row?.role,
      adresse: row?.adresse,
      email: row?.email,
      numero: row?.numero,
    };
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      headerAlign: "center",
      align: "center",
      filterable: false,
    },
    {
      field: "photo",
      headerName: "",
      width: 30,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <Avatar alt="Remy Sharp" src={params.row.photo} />;
      },
    },
    {
      field: "first_name",
      headerName: "Nom et prenom",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    // {
    //   field: "last_name",
    //   headerName: "last_name",
    //   width: 150,
    //   headerAlign: "center",align:"center",
    // },
    { field: "role", headerName: "role", width: 150, headerAlign: "center" },
    {
      field: "adresse",
      headerName: "adresse",
      width: 150,
      headerAlign: "center",
      align: "center",
    },

    { field: "email", headerName: "Email", width: 200, headerAlign: "center" },
    {
      field: "numero",
      headerName: "numero",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      headerAlign: "center",
      align: "center",

      renderCell: (params) => {
        return (
          <div className="h-100 w-100 d-flex justify-content-around align-items-center">
            <VisibilityIcon
              onClick={() => {
                handleShow(params);
              }}
            />
            {(myInfo.Employee.role === "admin" ||
              myInfo.Employee.role === "manager") && (
              <>
                <DeleteIcon
                  onClick={() => {
                    // console.log(params.id)
                    handledelete(params.id);
                  }}
                />
            <EditIcon
              onClick={() => {
                // console.log(params.id)
                handleEdit(params);
              }}
            />
              </>
            )}
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
              Liste des employés
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir des informations sur tous les employés.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          {(myInfo.Employee.role === "admin" ||
              myInfo.Employee.role === "manager") && (
              <>
            <Link to={"addEmployee"}>
              <Button> Ajouter un Employee </Button>
            </Link>
            </>)}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={(e) =>
                dispatch(filteremployees_lastname(e.target.value))
              }
            />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: 400, width: "100%" }}>
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
                  pageSize: 5,
                },
              },
            }}
          />
        </div>
      </CardBody>

      <EmployeeDetails
        show={show}
        setShow={setShow}
        employeeData={employeeData?.row}
      />
    </Card>
  );
}

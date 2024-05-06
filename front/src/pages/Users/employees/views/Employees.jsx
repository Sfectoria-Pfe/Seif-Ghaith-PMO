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
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import EditIcon from '@mui/icons-material/Edit';
import EditEmployee from "./EditEmployee";
export default function Employees() {
  const dispatch = useDispatch();
  const employeeStore = useSelector((state) => state.employee);
  
  const [show, setShow] = useState(false);
  const [employeeData, setEmployeeData] = useState({});
const navigate=useNavigate()
  const handleShow = (data) => {
    setShow(true);
    setEmployeeData(data);
  };
  const handledelete = (data) => {
dispatch(deleteemployee(data))
  };

  const handleEdit = (data) => {

    setEmployeeData(data.id,);
    console.log(data.id,"sfsfd");
    navigate(`editEmployee/${+data.id}`)
  };
  
  useEffect(() => {
    dispatch(getemployees());
  }, [dispatch]);
  const Rows = employeeStore.employees?.map((row) => {
    return {
      id: row?.id,
      photo: row?.photo,
      first_name: row?.first_name,
      last_name: row?.last_name,
      role: row?.role,
      adresse:row?.adresse,
      email: row?.email,
      numero:row?.numero
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 30, filterable: false },
    {
      field: "photo",
      headerName: "",
      width: 30,
      renderCell: (params) => {
        return <Avatar alt="Remy Sharp" src={params.row.photo} />;
      },
    },
    { field: "first_name", headerName: "First name", width: 150 },
    { field: "last_name", headerName: "last_name", width: 150 },
    { field: "role", headerName: "role", width: 150 },
    { field: "adresse", headerName: "adresse", width: 150 },

    { field: "email", headerName: "Email", width: 200 },
    { field: "numero", headerName: "numero", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
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
                // console.log(params.id)
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
              Liste des employés
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir des informations sur tous les employés.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to={"addEmployee"}>
              <Button> Add Employee </Button>
            </Link>
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
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={Rows}
            slots={{ toolbar: GridToolbar }}
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

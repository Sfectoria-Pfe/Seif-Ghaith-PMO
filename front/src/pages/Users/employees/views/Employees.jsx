import { useSelector, useDispatch } from "react-redux";
import { filteremployees_lastname, getemployees } from "../../../../store/empolyee";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";
import EditIcon from "@mui/icons-material/Edit";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Employees() {
  const dispatch = useDispatch();
  const employeeStore = useSelector((state) => state.employee);

  const [show, setShow] = useState(false);

  const [update, setupdate] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    dispatch(getemployees());
  }, [update]);
  const Rows = employeeStore.employees?.map((row) => {
    return {
      id: row?.id,
      photo: row?.photo,
      first_name: row?.first_name,
      last_name: row?.last_name,
      role: row?.role,
      email: row?.email,
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
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-center">
            {/* <Button> */}
              <EditIcon onClick={handleOpen} />
            {/* </Button> */}
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
            <Button > Add Employee </Button>
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
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Card>
  );
}

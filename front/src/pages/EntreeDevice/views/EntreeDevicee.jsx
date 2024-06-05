import { useSelector, useDispatch } from "react-redux";
import {getentree_devices,filterentree_lastname, deleteentree_device } from "../../../store/entree_device";
import { useEffect, useState} from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EntreeDeviceDetails from "../views/EntreeDeviceDetails";
import EditIcon from '@mui/icons-material/Edit';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function Entree_devicee() {
  const [row, setRow] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBond, setSelectedBond] = useState(null);
  
  const Store = useSelector((state) => state.entree_device.entree_devices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getentree_devices());
  }, []);

  console.log(Store,"this is Stooooooooore")
  useEffect(() => {
    setRow(Store);

  }, [Store]);  
  console.log(row ,"this is rowwwwwwwwwwwwww")

  const handleOpenModal = (entree_device) => {
    setSelectedBond(entree_device);
    setShowModal(true);};
    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedBond(null);
    };
    const handleDeleteField= (entree_deviceId) => {
      dispatch(deleteentree_device(entree_deviceId));
  
    };
  const columns = [
    {headerAlign: "center",
      align: "center", field: "id", headerName: "ID", width: 30, filterable: false },
    {headerAlign: "center",
      align: "center", field: "client_name", headerName: "Client Name", width: 150,valueGetter: (value, row) => {
      return value.row.Client?.first_name;
    },},
    {headerAlign: "center",
      align: "center", field: "title", headerName: "Title", width: 200 },
    {headerAlign: "center",
      align: "center", field: "description", headerName: "Description", width: 200 },
    {headerAlign: "center",
      align: "center", field: "createdAt", headerName: "createdAt", width: 200 },
    {headerAlign: "center",
      align: "center", field: "action", headerName: "Action", width: 200,
      renderCell:(params)=>{
        return(
          <div className="h-100 w-100 d-flex justify-content-around align-items-center">
            <VisibilityIcon onClick={() => handleOpenModal(params.row)}/>
            {(myInfo.Employee.role === "admin" ||
                myInfo.Employee.role==="receptionist" ||
                myInfo.Employee.role==="manager") && 
                  <> 
            <DeleteIcon onClick={() => handleDeleteField(params.row.id)}/>
            </>}
            <Link to={`editentree/${params.row.id}`} className="text-decoration-none text-reset">
            <EditIcon />
            </Link>
          </div>
        )
      }
     },
    
    
  ];
  const myInfo = useSelector((state) => state.auth.me);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des Bons Entrées
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir des informations sur les bons d'entree.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          {(myInfo.Employee.role === "admin" ||
                myInfo.Employee.role==="receptionist" ||
                myInfo.Employee.role==="manager") && 
                  <> 
          <Link to={"addband"}>
            <Button> Ajouter bons d'entreé </Button>
</Link>
</>}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
             onChange={(e) =>
                dispatch(filterentree_lastname(e.target.value))
            }
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
            rows={row}
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
      </CardBody>
      <div>
      {showModal && <EntreeDeviceDetails entree_device={selectedBond}  onClose={handleCloseModal} />}
      </div>
    </Card>
  );
}


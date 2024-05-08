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
  useEffect(() => {
    setRow(Store);

  }, [Store]);  
  console.log(row ,"this is store")

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
    { field: "id", headerName: "ID", width: 30, filterable: false },
    { field: "client_name", headerName: "Client Name", width: 150,valueGetter: (value, row) => {
      return value.row.Client?.first_name;
    },},
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "createdAt", headerName: "createdAt", width: 200 },
    { field: "statues", headerName: "statues", width: 200 },
    { field: "action", headerName: "Action", width: 200,
      renderCell:(params)=>{
        return(
          <div>
            <VisibilityIcon onClick={() => handleOpenModal(params.row)}/>
            <DeleteIcon onClick={() => handleDeleteField(params.row.id)}/>
            <Link to={`editentree/${params.row.id}`} className="text-decoration-none text-reset">
            <EditIcon />
            </Link>
          </div>
        )
      }
     },
    
    
  ];

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des Bandes Entrées
            </Typography>
            
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Link to={"addband"}>
            <Button> Ajouter band entreé </Button>
</Link>
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
          />
        </div>
      </CardBody>
      <div>
      {showModal && <EntreeDeviceDetails entree_device={selectedBond}  onClose={handleCloseModal} />}
      </div>
    </Card>
  );
}


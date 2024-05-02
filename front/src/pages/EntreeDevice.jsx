import { useSelector, useDispatch } from "react-redux";
import {getentree_device, getentree_devices,filterentree_lastname } from "../store/entree_device";
import { useEffect, useState} from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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

export default function Entree_device() {
  const [update,setupdate]=useState(true)
  
  const Store = useSelector((state) => state.entree_device);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getentree_devices());
  }, [update]);
  console.log(Store.entree_devices,"this is store")
  const Rows = Store.entree_devices?.map(entree_device => ({
    
      id: entree_device.id,   
      client_name : entree_device.Client.first_name,
      title: entree_device.title, 
      description: entree_device.description,
      createdAt: entree_device.createdAt,
      statues: entree_device.statues,

      
    
  }));
  const columns = [
    { field: "id", headerName: "ID", width: 30, filterable: false },
    { field: "client_name", headerName: "Client Name", width: 150 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "createdAt", headerName: "createdAt", width: 200 },
    { field: "statues", headerName: "statues", width: 200 },
    
    
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
          <Link to={"addBand"}>
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
            rows={Rows}
          />
        </div>
      </CardBody>
    </Card>
  );
}


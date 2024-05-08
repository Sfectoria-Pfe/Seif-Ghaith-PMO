import React from 'react'
import { useSelector, useDispatch } from "react-redux";
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
import { getorderreparations } from '../../../store/order_reparation';

function OrdreReparation() {

    const dispatch = useDispatch();
    const store = useSelector((state) => state.orderreparation.orderreparations);
    console.log(store, "fssssrom storee");


    useEffect(() => {
        dispatch(getorderreparations());
      }, [dispatch]);
      
      const rows = store.map((row) => {
      let xd=""
      if (row.etape[0]===undefined) {
         xd="rahi undefined"
      } 
      else {
         xd=row.etape[0].title
      }
        return {
          id: row?.id,
          title: row?.title,
          titleetape: xd,
          description: row?.description,
          entreeDeviceId: row?.entreeDeviceId ? row?.entreeDeviceId : "0" ,
          status: row.status,
          nomclient: row.Client?.first_name+"  "+row.Client?.last_name,
        };
      });
    
      const columns = [
        { field: "id", headerName: "ID", width: 30 },
        {
          field: "title",
          headerName: "title",
          width: 200
        },
    
        {
          field: "titleetape",
          headerName: "titleetape",
          width: 200,
        
        },
    
        { field: "description", headerName: "description", width: 200 },
        {
          field: "entreeDeviceId",
          headerName: "entreeDeviceId",
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
      ];
  return (
    <Card className="h-full w-full">
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Liste des 
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
  </Card>
  )
}

export default OrdreReparation
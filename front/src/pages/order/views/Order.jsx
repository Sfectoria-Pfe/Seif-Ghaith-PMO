import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { deleteorder, filterorder, getorders } from "../../../store/order";
import OrderDetails from "./OrderDetails";

export default function Order() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [row, setRow] = useState([]);
  const Store = useSelector((state) => state.order?.orders);
  console.log(Store, "this is store");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getorders());
  }, [dispatch]);

  useEffect(() => {
    setRow(Store);
  }, [Store]);

  console.log(row, "row");
  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };
  const handleDeleteField = (orderId) => {
    dispatch(deleteorder(orderId));
  };
  const columns = [
    {
      headerAlign: "center",
      align: "center",
      field: "id",
      headerName: "ID",
      width: 30,
      filterable: false,
    },

    {
      headerAlign: "center",
      align: "center",
      field: "first_name",
      headerName: "Client Name",
      width: 150,
      valueGetter: (value, row) => {
        return value.row.Client?.first_name;
      },
    },
    {
      headerAlign: "center",
      align: "center",
      field: "total",
      headerName: "Total",
      width: 200,
    },
    {
      headerAlign: "center",
      align: "center",
      field: "subTotal",
      headerName: "SubTotal",
      width: 200,
    },
    {
      headerAlign: "center",
      align: "center",
      field: "confirm",
      headerName: "Confirm",
      width: 200,
    },
    {
      headerAlign: "center",
      align: "center",
      field: "Action",
      headerName: "Action",
      width: 200,
      cellClassName: "actions",
      renderCell: (params) => {
        console.log(params.row, "this is the params");
        return (
          <div className="h-100 w-100 d-flex justify-content-around align-items-center">
            <VisibilityIcon onClick={() => handleOpenModal(params.row)} />

            <DeleteIcon onClick={() => handleDeleteField(params.row.id)} />
            <Link
              to={`editorder/${params.row.id}`}
              className="text-decoration-none text-reset"
            >
              <EditIcon />
            </Link>
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
              Liste des Devis
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir les Devis.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to={"addorder"}>
              <Button> Ajouter une devis </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              onChange={(e) => dispatch(filterorder(e.target.value))}
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
                  pageSize: 4,
                },
              },
            }}
          />
        </div>
      </CardBody>
      <div>
        {showModal && (
          <OrderDetails order={selectedOrder} onClose={handleCloseModal} />
        )}
      </div>
    </Card>
  );
}

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  createFilterOptions,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getclients } from "../../../store/client";
import { getentree_devices } from "../../../store/entree_device";
import Button from "@mui/joy/Button";
import AddEtape from "../../../components/AddEtape";
import { addorderreparation } from "../../../store/order_reparation";
import { Text } from "@react-pdf/renderer";
import { getemployees } from "../../../store/empolyee";

function AddOrderReparation() {
  const filter = createFilterOptions();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Storecli = useSelector((state) => state.client.clients);
  const StoreBande = useSelector((state) => state.entree_device.entree_devices);
  const [show, setShow] = useState(false);
  const [check, setOpenCheck] = useState(false);
  const empStore = useSelector((state) => state.employee.employees);
  useEffect(() => {
    dispatch(getemployees());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getclients());
    dispatch(getentree_devices());
  }, [dispatch]);
  const [data, setData] = useState({
    title: "",
    description: "",
    status: "",
    date: null,
    clientId: "",
    reclamationId: null,
    entreeDeviceId: "",
    // order:null
    // etapeIds: [{}],
  });
  function handlechange(e) {
    console.log(e, "eeeeeeeeeee");
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data, "handelllllllllll");
  }
  const [idrep, setIdrep] = useState();
  function handelSubmit(e) {
    e.preventDefault();
    dispatch(addorderreparation(data)).then((res) => {
      navigate(-1);
    });
  }

  // const handlesubmit = async ()=>{
  //     try {
  //         dispatch(postEtape).then((res)=>{
  //             dipatach(postOrderReaparation({
  //                 etapeId:res.id
  //             }))
  //         })
  //     } catch (error) {
  //     }
  // }
  return (
    <div>
      <div className="justify-content-center d-flex">
        <h1 className="pb-10 pt-7">Ajouter un order de reperation</h1>
      </div>
      <div className="d-flex justify-content-around">
        <form onSubmit={handelSubmit} className=" col-5">
          <div className="pb-3">
            <p className="mb-2">bande d'entree :</p>
            <Autocomplete
              onChange={(event, value, option) => {
                if (!(value === null)) {
                  setData((prev) => {
                    return {
                      ...prev,
                      entreeDeviceId: value.id,
                      clientId: value.clientId,
                      description: value.description,
                      title: value.title,
                    };
                  });
                }
              }}
              fullWidth
              options={StoreBande.filter(
                (elem, i) => elem?.Orders.length === 0
              )}
              // autoHighlight
              getOptionLabel={(option) => {
                return option.title;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some(
                  (option) => inputValue === option.title
                );
                if (inputValue !== "" && !isExisting) {
                  filtered.push({
                    inputValue,
                    title: `Add new bande`,
                  });
                }

                return filtered;
              }}
              freeSolo
              renderOption={(props, option) =>
                option.title !== "Add new bande" ? (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    {option.title}
                  </Box>
                ) : (
                  <Link to="/entreedevices/addband">
                    Ajouter un bande d'entree
                  </Link>
                )
              }
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    label="Titre de bande d'entree "
                    inputProps={{
                      ...params.inputProps,
                      // autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="pb-3">
            <p className="mb-2">Title</p>
            <TextField
              fullWidth={true}
              label="Title"
              name="title"
              onChange={handlechange}
              value={data.title}
              required
            />
          </div>
          <div className="pb-3">
            <p className="mb-2">Client :</p>
            <TextField
            disabled
              fullWidth={true}
              value={Storecli[data.clientId - 1]?.first_name}
            />
          </div>
          <div className="pb-3">
            <p className="mb-2">Description</p>
            <TextField
              fullWidth={true}
              label="Description"
              name="description"
              onChange={handlechange}
              value={data.description}
              required
            />
          </div>
          <div className="pb-3">
            <p className="mb-2">Status</p>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.status}
                label="Status"
                name="status"
                onChange={handlechange}
              >
                <MenuItem value={"inProgress"}>inProgress</MenuItem>
                <MenuItem value={"completed"}>completed</MenuItem>
                <MenuItem value={"pending"}>pending</MenuItem>
                <MenuItem value={"onhold"}>onhold</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="pb-3">
            <p className="mb-2">Date :</p>
            <DatePicker
              slotProps={{ textField: { fullWidth: true } }}
              label="Controlled picker"
              value={data.date}
              onChange={(newValue) =>
                setData((prev) => {
                  return { ...prev, date: newValue };
                })
              }
            />
          </div>
          <div className="pb-3">
        <p className="mb-2">Employee :</p>
        <Autocomplete
          fullWidth
          onChange={(event, value, option) => {
            if (!(value === null)) {
              setData((prev) => {
                return { ...prev, employeeId: value.id };
              });
            }
          }}
          options={empStore}
          getOptionLabel={(option) => {
            return option.first_name + " " + option.last_name;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.first_name
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                first_name: `Add new emp`,
                last_name: " ",
              });
            }
            return filtered;
          }}
          freeSolo
          renderOption={(props, option) =>
            option.first_name !== "Add new emp" ? (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.first_name + " " + option.last_name}
              </Box>
            ) : (
              <Link to="/employes/addemployee">Add new employee</Link>
            )
          }
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="Nom de employe "
                inputProps={{
                  ...params.inputProps,
                  // autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            );
          }}
        />
      </div>
          <div>
            <Checkbox
              onChange={() => {
                setOpenCheck(!check);
              }}
            />
            isReclamation
            <div className="pb-7">
              {check ? <TextField fullWidth={true} required /> : " "}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button type="submit"> Confirmer l'ajout </Button>
          </div>
        </form>
        {/* <div className="col-5 pl-5 pt-7">
          <div className="d-flex align-items-center flex-column pb-7">
 
          </div>
          <div>{show ? <AddEtape idrep={idrep} /> : " "}</div>
        </div> */}
      </div>
    </div>
  );
}

export default AddOrderReparation;

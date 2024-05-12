import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  createFilterOptions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getclients } from "../../../store/client";
import { getentree_devices } from "../../../store/entree_device";
import { getorderreparation } from "../../../store/order_reparation";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/joy/Button";
import dayjs from "dayjs";

function EditOrderReparation() {
  const { id } = useParams();
  const Store = useSelector((state) => state.client.clients);
  const StoreBande = useSelector((state) => state.entree_device.entree_devices);
  const storInit = useSelector(
    (state) => state.orderreparation.orderreparation
  );
  const filter = createFilterOptions();
  const [check, setOpenCheck] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getclients());
    dispatch(getentree_devices());
    dispatch(getorderreparation(id));
  }, []);

  const [data, setData] = useState({
    title: storInit.title,
    description: storInit.description,
    status: storInit.status,
    date: dayjs(storInit.date),
    clientId: storInit.clientId,
    reclamationId: storInit.reclamationId,
    entreeDeviceId: storInit.entreeDeviceId,
    // order:null
    // etapeIds: [{}],
  });
  function handlechange(e) {
    console.log(e, "eeeeeeeeeee");
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data, "handelllllllllll");
  }
  return (
    <div>
      <form
        //   onSubmit={handelSubmit}
        className=" col-5"
      >
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
          <p className="mb-2">bande d'entree :</p>
          <Autocomplete
            onChange={(event, value, option) => {
      
              if (!(value === null)) {
                setData((prev) => {
                  return { ...prev, entreeDeviceId: value.id };
                });
              }
            }}
            fullWidth
            options={StoreBande}
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
                //   defaultValue={}
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
            // defaultValue={}
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
          <p className="mb-2">Client :</p>
          <Autocomplete
            fullWidth
            onChange={(event, value, option) => {
              if (!(value === null)) {
                setData((prev) => {
                  return { ...prev, clientId: value.id };
                });
              }
            }}
            options={Store}
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
                  first_name: `Add new client`,
                  last_name: " ",
                });
              }
              return filtered;
            }}
            freeSolo
            renderOption={(props, option) =>
              option.first_name !== "Add new client" ? (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {option.first_name + " " + option.last_name}
                </Box>
              ) : (
                <Link to="/clients/addclient">Add new client</Link>
              )
            }
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Nom de Client "
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
    </div>
  );
}

export default EditOrderReparation;

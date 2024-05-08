import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Autocomplete,
  Box,
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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getclients } from "../../../store/client";

function AddOrderReparation() {
  const filter = createFilterOptions();
  const dispatch = useDispatch();
  const Store = useSelector((state) => state.client.clients);

  useEffect(() => {
    dispatch(getclients());
  }, []);
  const [data, setData] = useState({
    title: "",
    description: "",
    status: "",
    date: dayjs("2022-04-17"),
    clientId: null,
    reclamationId: null,
    entreeDeviceId: "",
    // etapeIds:
  });
  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  return (
    <div className="d-flex justify-content-center">
      <form className="">
        <h1 className="pb-10 pt-7">Ajouter un order de reperation</h1>
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
            label="Controlled picker"
            value={data.date}
            onChange={handlechange}
          />
        </div>
        <div className="pb-3">
          <p className="mb-2">Client :</p>
          <Autocomplete
            onChange={(event, value, option) => {
              console.log(value);
              console.log(option, "asdsd");

              if (!(value === null)) {
                setData((prev) => {
                  return { ...prev, clientId: value.id };
                });
              }
            }}
            sx={{ width: 300 }}
            options={Store}
            // autoHighlight
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
      </form>
    </div>
  );
}

export default AddOrderReparation;

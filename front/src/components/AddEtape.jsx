import {
  Autocomplete,
  Box,
  
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  createFilterOptions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Textarea from "@mui/joy/Textarea";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getemployees } from "../store/empolyee";
import { useDispatch, useSelector } from "react-redux";
import { addetape } from "../store/etape";
import Button from "@mui/joy/Button";

function AddEtape({ idrep }) {
  const { id } = useParams();
  console.log(id,"id siiiiiiiiiiiiiiiiiiipleeeeeeeeeeeeeeeee")
  console.log(idrep,"fooooooooooooooooookkkkk")
var idfinal
  if (id==undefined||'') {
    idfinal=+idrep
  } else {
    idfinal=+id
  }
  console.log(idfinal,"3333")
  const [data, setData] = useState({
    title: "",
    rapport: "",
    description: "",
    status: "",
    type: "",
    date: null,
    employeeId: null,
    orderReparationId: +idfinal,
  });
  function handlechange(e) {
    console.log(e, "eeeeeeeeeee");
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data, "handelllllllllll");
  }
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    dispatch(addetape(data));
    navigate(-1);
  }

  const filter = createFilterOptions();
  const dispatch = useDispatch();

  const empStore = useSelector((state) => state.employee.employees);
  useEffect(() => {
    dispatch(getemployees());
  }, [dispatch]);
  console.log(empStore);
  return (
    <form onSubmit={handelSubmit} className="border p-3">
      <h5>Etape :</h5>
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
        <p className="mb-2">Rapport</p>
        <Textarea
          //   size='lg'
          minRows={3}
          fullWidth={true}
          label="rapport"
          name="rapport"
          onChange={handlechange}
          value={data.rapport}
          required
        />
      </div>
      <div className="pb-3">
        <p className="mb-2">Description</p>
        <Textarea
          minRows={3}
          fullWidth={true}
          label="description"
          name="description"
          onChange={handlechange}
          value={data.description}
          required
        />
      </div>
      <div className="pb-3">
        <p className="mb-2">status</p>
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
        <p className="mb-2">type </p>
        <TextField
          fullWidth={true}
          label="type"
          name="type"
          onChange={handlechange}
          value={data.type}
          required
        />
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
      <Button type="submit">ajouter etape</Button>
    </form>
  );
}

export default AddEtape;

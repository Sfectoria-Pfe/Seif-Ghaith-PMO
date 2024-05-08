import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Select, TextField, createFilterOptions } from "@mui/material";
import React, { useEffect } from "react";
import Textarea from "@mui/joy/Textarea";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import { getemployees } from "../store/empolyee";
import { useDispatch, useSelector } from "react-redux";

function AddEtape() {
    const filter = createFilterOptions();
    const dispatch = useDispatch();

    const empStore = useSelector((state) => state.employee.employees);
    useEffect(() => {
      dispatch(getemployees());
    }, [dispatch]);
    console.log(empStore)
  return (
    <div className="border p-3">
      <h5>Etape :</h5>
      <div className="pb-3">
        <p className="mb-2">Title</p>
        <TextField
          fullWidth={true}
          label="Title"
          name="title"
          // onChange={handlechange}
          // value={data.title}
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
          // onChange={handlechange}
          // value={data.title}
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
          // onChange={handlechange}
          // value={data.title}
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
            //   value={data.status}
              label="Status"
              name="status"
            //   onChange={handlechange}
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
          // onChange={handlechange}
          // value={data.title}
          required
        />
      </div>
      <div className="pb-3">
          <p className="mb-2">Date :</p>
          <DatePicker
            slotProps={{ textField: { fullWidth: true } }}
            label="Controlled picker"
            // value={data.date}
            // onChange={(newValue) =>
            //   setData((prev) => {
            //     return { ...prev, date: newValue };
            //   })
            // }
          />
        </div>
        <div className="pb-3">
          <p className="mb-2">Employee :</p>
          <Autocomplete
            fullWidth
            // onChange={(event, value, option) => {
            //   if (!(value === null)) {
            //     setData((prev) => {
            //       return { ...prev, clientId: value.id };
            //     });
            //   }
            // }}
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
    </div>
  );
}

export default AddEtape;

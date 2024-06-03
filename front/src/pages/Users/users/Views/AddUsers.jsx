import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { getclients } from "../../../../store/client";
import axios from "axios";
import { Box, Checkbox } from "@mui/material";
import { getemployees } from "../../../../store/empolyee";
import { addUser } from "../../../../store/user";

function AddUser() {
  const filter = createFilterOptions();

  const [check, setOpenCheck] = useState(false);
  const navigate = useNavigate();
  const storeEmployees = useSelector((state) => state.employee.employees);
  const storeClients = useSelector((state) => state.client.clients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getclients());
    dispatch(getemployees());
  }, [dispatch]);

  const [data, setData] = useState({
    password: "12345",
    email: "",
    isClient: check,
    isActive: true,
    clientId: null,
    employeeId: null,
  });

  function handle(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  async function handelSubmit(e) {
    if (data.email == "") {
      alert("remplir les champ");
      e.preventDefault();
    } else if (data.clientId === null && data.employeeId === null) {
      alert("remplir les champ");

      e.preventDefault();
    } else {
      e.preventDefault();
      dispatch(addUser(data));
      navigate(-1);
    }
  }

  return (
    <div>
      <div>
        <Link to={"/Users"}>
          <button type="button" className="btn btn-dark rounded-pill ml-2 mt-2">
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center  justify-content-center">
        <form onSubmit={handelSubmit}>
          <div className="d-flex align-items-center justify-content-center pb-4">
            <h2>Ajouter un Utilisateur </h2>
          </div>
          <p className="mb-0 mt-3">email</p>
          <Input
            label="email"
            type="email"
            name="email"
            onChange={handle}
            required
          />
          <div>
            <div className="pb-7">
              {check ? (
                <>
                  <p className="mb-0 mt-3">client :</p>
                  <Autocomplete
                    fullWidth
                    onChange={(event, value, option) => {
                      if (!(value === null)) {
                        setData((prev) => {
                          return { ...prev, clientId: value.id };
                        });
                      }
                    }}
                    options={storeClients.filter(
                      (elem, i) => elem?.user.length === 0
                    )}
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
                </>
              ) : (
                <>
                  <p className="mb-0 mt-3">employee :</p>
                  <Autocomplete
                    fullWidth
                    onChange={(event, value, option) => {
                      if (!(value === null)) {
                        setData((prev) => {
                          return { ...prev, employeeId: value.id };
                        });
                      }
                    }}
                    options={storeEmployees.filter(
                      (elem, i) => elem?.user.length === 0
                    )}
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
                          }}
                        />
                      );
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <br />
          <Checkbox
            onChange={() => {
              setOpenCheck(!check);
              setData((prev) => {
                return { ...prev, isClient: !check };
              });
            }}
          />
          client ?
          <div className="d-flex align-items-center  justify-content-center">
            <Button color="black" type="submit" onClick={handelSubmit}>
              Submit
            </Button>
          </div>
          <div>
            <p>
              (<span className="text-danger">*</span>) est obligatoire
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

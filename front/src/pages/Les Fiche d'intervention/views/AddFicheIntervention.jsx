import {
  Autocomplete,
  Box,
  TextField,
  createFilterOptions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getorderreparations } from "../../../store/order_reparation";
import { Link, useNavigate } from "react-router-dom";
import { addfiche_intervention } from "../../../store/fiche_intervention";
import AddFicheInterventionDetails from "../components/AddFicheInterventionDetails";
import Button from "@mui/joy/Button";

export default function AddFicheIentervention() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const store = useSelector((state) => state.orderreparation.orderreparations);
  const filter = createFilterOptions();

  function handlechange(e) {
    console.log(e, "eeeeeeeeeee");
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data, "handelllllllllll");
  }

  const [show, setShow] = useState(false);
  const [idFiche, setIdFiche] = useState();

  function handelSubmit(e) {
    e.preventDefault();
    dispatch(addfiche_intervention(data)).then((res) => {});
  }
  useEffect(() => {
    dispatch(getorderreparations());
  }, [dispatch]);
  console.log(store, "storssssssssssssssssssssssssssssssssssssssssssssssssse");
  return (
    <div className=" d-flex  justify-content-center">
      <form
        className="h-50 w-50"
        onSubmit={handelSubmit}
      >
        <h1 className="pt-9 d-flex justify-content-center">
          Ajout d'une fiche d'intervention
        </h1>
        <div>
          <p className="pt-10 mb-2">Order Reparation :</p>
          <Autocomplete
            onChange={(event, value, option) => {
              console.log(value);
              console.log(option, "asdsd");

              if (!(value === null)) {
                setData((prev) => {
                  return { ...prev, orderReparationId: value.id };
                });
              }
            }}
            fullWidth
            options={store}
            getOptionLabel={(option) => {
              return option.title;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              const { inputValue } = params;
              const isExisting = options.some(
                (option) => inputValue === option.title
              );
              if (inputValue !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add new Order`,
                });
              }
              return filtered;
            }}
            freeSolo
            renderOption={(props, option) =>
              option.title !== "Add new Order" ? (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {option.title}
                </Box>
              ) : (
                <Link to="/orderReparation/addorderreparation">
                  Ajouter un order reparation
                </Link>
              )
            }
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Titre de order reparation"
                  inputProps={{
                    ...params.inputProps,
                    // autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              );
            }}
          />
        </div>
        <div className="d-flex justify-content-center">

        <Button 
          className="w-25 mt-5 "
          onSubmit={handelSubmit}
          type="submit"
          >
          submit
        </Button>
          </div>
      </form>
    </div>
  );
}

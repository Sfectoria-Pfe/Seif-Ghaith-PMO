import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function AddFicheIentervention() {
  const [data, setData] = useState({
    description: "",
    status: "",
    ordreReparationid: null,
  });

  return (
    <div>
      <h5
        style={{ fontSize: 24, fontFamily: "sans-serif", fontWeight: "bold" }}
      >
        <div>
          <p className="mb-2">Order Reparation :</p>
          <Autocomplete
            onChange={(event, value, option) => {
              console.log(value);
              console.log(option, "asdsd");

              if (!(value === null)) {
                setData((prev) => {
                  return { ...prev, ordreReparationid: value.id };
                });
              }
            }}
            fullWidth
            options={store}
            // autoHighlight
            getOptionLabel={(option) => {
              return option.titel;
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
        Fiche d'intervention
      </h5>
      <div>
        <form>
          <div className="pb-3">
            <p className="mb-2">Description</p>
            <TextField
              fullWidth={true}
              label="description"
              name="description"
              // onChange={handlechange}
              // value={data.description}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

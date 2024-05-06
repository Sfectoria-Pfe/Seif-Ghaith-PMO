import React, { useEffect, useState } from "react";
import { addreclamation } from "../../../store/reclamation";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { getclients } from "../../../store/client";
import axios from "axios";

function AddReclamation() {
  const filter = createFilterOptions();

  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const Store = useSelector((state) => state.client);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getclients());
  }, []);
  const clientName = Store.clients?.map((client) => ({
    label: client.first_name,
    clientId: client.id,
  }));

  console.log(clientName, "this is the array of clients");

  const [data, setData] = useState({
    clientId: "",
    titel: "",
    description: "",
    image: null,
  });

  function handle(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  async function handelSubmit(e) {
    e.preventDefault();
    const im = new FormData();
    im.append("file", file);
    console.log(file);
    const response = await axios.post("http://localhost:4000/upload", im);
    const productWithCover = { ...data, image: response.data.path };

    console.log(data, "this is the data ");
    dispatch(addreclamation(productWithCover));
    navigate(-1);
  }

  return (
    <div>
      <div>
        <Link to={"/reclamation"}>
          <button type="button" className="btn btn-dark rounded-pill ml-2 mt-2">
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center  justify-content-center">
        <form onSubmit={handelSubmit}>
          <div className="d-flex align-items-center justify-content-center pb-4">
            <h2>Ajouter une Reclamation</h2>
          </div>
          <p className="mb-0">Client name</p>
          <Autocomplete
            name="clientId"
            sx={{ width: 300 }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            freeSolo
            id="free-solo-2-demo"
            options={clientName}
            onChange={(event, value) => {
              setData((prev) => {
                return { ...prev, clientId: value.clientId };
              });
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              // Suggest the creation of a new value
              if (params.inputValue !== "") {
                filtered.push({
                  // inputValue : params.inputValue,
                  title: `Asmmsdd "${params.inputValue}"`,
                });
              }

              return filtered;
            }}
            renderInput={(params) => (
              <TextField {...params} label="Client name" />
            )}
            required
          />
          <p className="mb-0 mt-3">Title</p>
          <Input
            label="Title"
            name="titel"
            onChange={handle}
            value={data.titel}
            required
          />
          <p className="mb-0 mt-3">Description</p>
          <Textarea
            label="Description"
            name="description"
            onChange={handle}
            value={data.description}
            required
          />

          <p className="mb-0 mt-3">Inserer une image</p>
          <input
            type="file"
            size="sm"
            name="image"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            value={data.image}
            required
            className="mb-5"
          />
          <br />
          <div className="d-flex align-items-center  justify-content-center">
            <Button color="black" type="submit" onClick={handelSubmit}>
              Submit
            </Button>
          </div>
          <div>
            <p>
              {" "}
              (<span className="text-danger">*</span>) est obligatoire{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReclamation;

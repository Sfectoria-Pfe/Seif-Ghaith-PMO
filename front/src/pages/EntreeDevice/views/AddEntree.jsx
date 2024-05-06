import React, { useEffect, useState } from "react";
import { addentree_device } from "../../../store/entree_device";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getclients } from "../../../store/client";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function AddReclamation() {
  const [file, setFile] = useState(null);
const navigate=useNavigate()
  const Store = useSelector((state) => state.client);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getclients());
  }, []);
  const clientName = Store.clients?.map((client) => ({
    label: client.first_name,
    clientId: client.id,
  }));

  const [data, setData] = useState({
    clientId: "",
    title: "",
    description: "",
    rapport:"",
    statues:"",
    image: null,
  });

  function handle(e) {
    const { name, value,statues } = e.target;
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
    dispatch(addentree_device(productWithCover));
    navigate(-1)
  }

  return (
    <div>
      <div>
        <Link to={"/entreedevice"}>
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
            getOptionSelected={(option) => {
              console.log(option, "op");
            }}
            onChange={(event, value) => {
              setData((prev) => {
                return { ...prev, clientId: value.clientId };
              });
              console.log(value?.clientId, "v");
            }}
            disablePortal
            name="clientId"
            options={clientName}
            sx={{ width: 300 }}
            required
            value={clientName?.clientId}
            renderInput={(params) => (
              <TextField {...params} label="Client name" />
            )}
          />
          <p className="mb-0 mt-3">Title</p>
          <Input
            label="Title"
            name="title"
            onChange={handle}
            value={data.title}
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
          <p className="mb-0 mt-3">Rapport</p>
          <Textarea
            label="rapport"
            name="rapport"
            onChange={handle}
            value={data.rapport}
            required
          />
          <p className="mb-0 mt-3">Status</p>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         value={data.statues}
          label="Status"
          name="statues"
          onChange={handle}
        >
          <MenuItem value={"valider"}>valider</MenuItem>
          <MenuItem value={"rejeter"}>A rejeter</MenuItem>
          <MenuItem value={"terminer"}>terminer</MenuItem>
          <MenuItem value={"en cours"}>en cours</MenuItem>
        </Select>
      </FormControl>
    </Box>

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

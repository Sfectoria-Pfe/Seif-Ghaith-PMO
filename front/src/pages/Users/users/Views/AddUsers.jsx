import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { getclients } from "../../../../store/client";
import axios from "axios";
// import * as bcrypt from 'bcrypt';

import { Box } from "@mui/material";

function AddUser() {
  const filter = createFilterOptions();

  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const Store = useSelector((state) => state.client.clients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getclients());
  }, [dispatch]);
  const clients = Store?.map((client) => ({
    label: client.first_name,
    clientId: client.id,
  }));
  
  const [data, setData] = useState({
    password: "12345",
    email: "",
    isclient: false,
    isActive: true,
    clientId: "",
    employeeId: "",
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
    // dispatch(addreclamation(productWithCover));
    navigate(-1);
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

          <p className="mb-0 mt-3">nom</p>
          <Input
            label="nom"
            name="first_name"
            onChange={handle}
            // value={data.titel}y
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
              (<span className="text-danger">*</span>) est obligatoire
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

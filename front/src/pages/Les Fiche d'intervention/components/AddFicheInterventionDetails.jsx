import {
    TextField,
  } from "@mui/material";
  import React, {  useState } from "react";
  import Textarea from "@mui/joy/Textarea";
  import { Link, useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import Button from "@mui/joy/Button";
  import { addfiche_intervention } from "../../../store/fiche_intervention";
  
  function AddFicheInterventionDetails({ idfiche }) {
      const navigate = useNavigate();
      const dispatch = useDispatch();
    const [data, setData] = useState({
      title: "",
      rapport: "",
      description: "",
      ficheInterventionId: idfiche,
    });
    function handlechange(e) {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }
  
    function handelSubmit(e) {
      e.preventDefault();
      dispatch(addfiche_intervention(data));
      navigate(-1);
    }
  
  
    return (
      <form onSubmit={handelSubmit} className="border p-3">
        <h5>Fiche intervention details : </h5>
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
        <Button type="submit">Submit</Button>
      </form>
    );
  }
  
  export default AddFicheInterventionDetails;
  
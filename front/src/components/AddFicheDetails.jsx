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
import { addfiche_intervention_detail } from "../store/fiche_intervention_details";

function AddFicheDetails({setShow}) {
  const {id}=useParams()
  const [data, setData] = useState({
    title: "",
    rapport: "",
    description: "",
    ficheInterventionId: +id,
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
    dispatch(addfiche_intervention_detail(data));
    // navigate(-1);
    setShow(false)
  }

  const filter = createFilterOptions();
  const dispatch = useDispatch();
  return (
    <form onSubmit={handelSubmit} className="border p-3">
      <h5>Details :</h5>
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
      <Button type="submit">ajouter le premier etape</Button>
    </form>
  );
}

export default AddFicheDetails;

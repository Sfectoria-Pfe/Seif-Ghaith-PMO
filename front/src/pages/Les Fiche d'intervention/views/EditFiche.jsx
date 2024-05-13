import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  createFilterOptions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/joy/Button";
import dayjs from "dayjs";
import fiche_intervention, {
  getfiche_intervention,
  updatefiche_intervention,
} from "../../../store/fiche_intervention";
import AddFicheDetails from "../../../components/AddFicheDetails";

function EditFiche() {
  const { id } = useParams();
  const filter = createFilterOptions();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector(
    (state) => state.fiche_intervention?.fiche_intervention
  );
  const [check, setOpenCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [idfiche, setIdfiche] = useState();
  const [data, setData] = useState({ status: "" });
  useEffect(() => {
    dispatch(getfiche_intervention(+id));
  }, []);

  useEffect(() => {
    if (store) setData(store);
  }, [store]);

  function handle(e) {
    const { name, value } = e.target;
    if (name === "status") {
      
      setData((prev) => ({ ...prev, status: value }));
    } else {
      
      setData({
        ...data,
        OrderReparation: { ...data.OrderReparation, [name]: value },
      });
    }
  }
  
  const handeldetails = (e, i) => {
    const { name, value } = e.target;
    let aux = Object.assign({},data);
    let array=[...aux.details]
    let obj=Object.assign({},aux.details[i])
    obj[name] = value;
    console.log(obj);
    array[i]=Object.assign({},obj)
    aux.details=[...array]
    setData(aux);
  };
 
  const handelShow = (e) => {
    setShow(true);
    setIdfiche(e.payload);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updatefiche_intervention({ id: +id, body: data }));

    navigate(-1);
  };
  return (
    <div className="d-flex gap-20">
      <form onSubmit={handleEdit} className=" col-5">
        <div className="pb-3">
          <p className="mb-2">Title</p>
          <TextField
            fullWidth={true}
            name="title"
            onChange={handle}
            value={data?.OrderReparation?.title}
            required
          />
        </div>
        <div className="pb-3">
          <p className="mb-2">Description</p>
          <TextField
            fullWidth={true}
            name="description"
            onChange={handle}
            value={data?.OrderReparation?.description}
            required
          />
        </div>
        <div className="pb-3">
          <p className="mb-2">bande d'entree :</p>
          <TextField
            fullWidth={true}
            name="title"
            onChange={handle}
            value={data?.OrderReparation?.EntreeDevice?.title}
            required
            disabled
          />
        </div>
        <div className="pb-3">
          <p className="mb-2">Status</p>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data?.status}
              name="status"
              onChange={handle}
            >
              <MenuItem value={"inProgress"}>inProgress</MenuItem>
              <MenuItem value={"toFactured"}>toFactured</MenuItem>
              <MenuItem value={"closed"}>closed</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="pb-3">
          <p className="mb-2">Client :</p>
          <TextField
            fullWidth={true}
            name="first_name"
            onChange={handle}
            value={data?.OrderReparation?.Client?.first_name}
            required
            disabled
          />
        </div>
        <h5>Etape :</h5>

        {data?.details?.map((detail, i) => (
          <div div key={i}>
            <div className="pb-3">
              <p className="mb-2">Title :</p>
              <TextField
                fullWidth={true}
                name="title"
                onChange={(e) => handeldetails(e, i)}
                value={detail.title}
                required
              />
            </div>
            <div className="pb-3">
              <p className="mb-2">Rapport :</p>
              <TextField
                fullWidth={true}
                name="rapport"
                onChange={(e) => handeldetails(e, i)}
                value={detail.rapport}
                required
              />
            </div>
            <div className="pb-3">
              <p className="mb-2">Description :</p>
              <TextField
                fullWidth={true}
                name="description"
                onChange={(e) => handeldetails(e, i)}
                value={detail.description}
                required
              />
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-center gap-2">
          <Button type="submit"> Modifier </Button>
          <Button onClick={handelShow}> ajouter une etape</Button>
        </div>
      </form>

      <div className="col-5 pl-5 pt-7">
        {show && <AddFicheDetails setShow={setShow}  />}
      </div>
    </div>
  );
}

export default EditFiche;

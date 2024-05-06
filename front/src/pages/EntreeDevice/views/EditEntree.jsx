import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useRoute } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import entree_device, { getentree_device, updateentree_device } from "../../../store/entree_device";

function EditEntree({ route }) {
  const navigate = useNavigate();
  const store = useSelector((state) => state.entree_device?.entree_device);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(store, "this is reclamation");

  useEffect(() => {
    dispatch(getentree_device(+id));
  }, []);
  const [data, setData] = useState();
  useEffect(() => {
    if (store) setData(store);
  }, [store]);
  function handle(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateentree_device({id:+id,body: data}));
    navigate(-1);
  };

  return (
    <div>
      <div>
        <Link to={"/entreedevices"}>
          <button type="button" className="btn btn-dark rounded-pill ml-2 mt-2">
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center  justify-content-center">
        <form onSubmit={handleEdit}>
          <div className="d-flex align-items-center justify-content-center pb-4">
            <h2>Modifier une Bonde Entrée</h2>
          </div>
          <p className="mb-0">Nom de Client</p> 
           <Input
            name="first_name"
            sx={{ width: 300 }}
            disabled
            Value={data?.Client?.first_name}
            />

          <p className="mb-0 mt-3">Titre</p>
          <Input name="title" value={data?.title} onChange={handle} />
          <p className="mb-0 mt-3">Statues</p>
          <Input name="statues" value={data?.statues} onChange={handle} />
          <p className="mb-0 mt-3">Description</p>
          <Textarea
            name="description"
            value={data?.description}
            onChange={handle}
          />

          {/* <p className="mb-0 mt-3">Inserer une image</p>
          <input
            type="file"
            size="sm"
            name="image"
            className="mb-5"
          /> */}
          <br />
          <div className="d-flex align-items-center  justify-content-center">
            <Button color="black" type="submit" onSubmit={() => handleEdit()}>
              Modifier
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEntree;

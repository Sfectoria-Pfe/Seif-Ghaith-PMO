import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useRoute } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import {
  getreclamation,
  updatereclamation,
} from "../../../store/reclamation";
import { ToastContainer, toast } from "react-toastify";

function EditReclamation({ route }) {
  const navigate = useNavigate();
  const store = useSelector((state) => state.reclamation?.reclamation);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(store, "this is reclamation");

  useEffect(() => {
    dispatch(getreclamation(+id));
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
    dispatch(updatereclamation({id:+id,body: data}))
    .then((res) => {
      if (!res.error) {
        toast.success("reclamation modifier avec succès !");
        setTimeout(() => {
          navigate(-1)
        }, 2000);
      } else {
        toast.error("Erreur lors de modification du bond entree. Veuillez réessayer.");
      }
    })
    .catch(() => {
      toast.error("Erreur lors de modification du bond entree. Veuillez réessayer.");
    })
    navigate(-1);
  };

  return (
    <div>
      <div>
        <Link to={"/reclamations"}>
          <button type="button" className="btn btn-dark rounded-pill ml-2 mt-2">
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center  justify-content-center">
        <form onSubmit={handleEdit}>
          <div className="d-flex align-items-center justify-content-center pb-4">
            <h2>Modifier une Reclamation</h2>
          </div>
          {/* <p className="mb-0">Nom de Client</p> 
           <Input
            name="clientId"
            sx={{ width: 300 }}
            
            defaultValue={reclamation?.Client?.first_name}
            /> */}

          <p className="mb-0 mt-3">Titre</p>
          <Input name="titel" value={data?.titel} onChange={handle} />
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
          <ToastContainer className="toast-position" position="bottom-center"/>
        </form>
      </div>
    </div>
  );
}

export default EditReclamation;

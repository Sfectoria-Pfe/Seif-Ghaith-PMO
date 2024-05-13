import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addemployee } from "../../../../store/empolyee";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function AddEmplyee() {
  const [file, setFile] = useState({});
  const dispatch = useDispatch();
const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      photo: null,
      role: "",
      adresse:"",
      numero:""
    },

    onSubmit: async (values,res) => {
      console.log(values.photo);
      const im = new FormData();
      im.append("file", file);
      const response = await axios.post("http://localhost:4000/upload", im);
      console.log(response.data);
      const productWithCover = { ...values, photo: response.data.path };
      console.log("Form submitted with data:", productWithCover).then((res) => {
        if (!res.error) {
          toast.success(" Employee ajouter  avec succès !");
          setTimeout(() => {
            navigate(-1)
          }, 2000);
        } else {
          toast.error("Erreur lors de l'ajout du bond entree. Veuillez réessayer.");
        }
      })
      .catch(() => {
        toast.error("Erreur lors de l'ajout du bond entree. Veuillez réessayer.");
      })
      
    },
  });
  return (
    <div>
      <div>
        <Link to={"/employees"}>
          <button type="button" class="btn btn-dark rounded-pill ml-2 mt-2">
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center  justify-content-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex align-items-center justify-content-center pb-4">
            <h2>Ajouter un Employee</h2>
          </div>
          <p className="mb-0">First name</p>
          <Input
            label="First name"
            name="first_name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            required
          />
          <p className="mb-0 mt-3">Last name</p>
          <Input
            label="Last name"
            name="last_name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            required
          />

          <p className="mb-0 mt-3">Email address</p>
          <Input
            type="email"
            label="Email address"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
                <p className="mb-0 mt-3">Address</p>
          <Input
            type="string"
            label="adresse"
            name="adresse"
            onChange={formik.handleChange}
            value={formik.values.adresse}
            required
          
          />
                <p className="mb-0 mt-3">numero</p>

              <Input
            type="string"
            label="numero"
            name="numero"
            onChange={formik.handleChange}
            value={formik.values.numero}
            required
          />

          <p className="mb-0 mt-3">Role</p>
          <Form.Select
            className="custom-select"
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role}
            required
          >
            <option value="" disabled selected>
              choisir un role *{" "}
            </option>
            <option value="receptionist">Receptionniste</option>
            <option value="technicien">Technicient</option>
            <option value="admin">admin</option>
            <option value="manager">manager</option>
          </Form.Select>
          <p className="mb-0 mt-3">Inserer une image</p>
          <input
            type="file"
            size="sm"
            name="photo"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            value={formik.values.photo}
            required
            className="mb-5"
          />
          <br />
          <div className="d-flex align-items-center  justify-content-center">
            <Button color="green" type="submit">
              Submit
            </Button>
          </div>
          <div>
            <p>
              {" "}
              (<span className="text-danger">*</span>) est obligatoire{" "}
            </p>
          </div>
          <ToastContainer className="toast-position" position="bottom-center"/>
        </form>
      </div>
    </div>
  );
}

export default AddEmplyee;

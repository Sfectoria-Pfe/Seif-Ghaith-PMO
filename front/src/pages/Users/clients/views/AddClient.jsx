import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addclient } from '../../../../store/client';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AddClient() {
    const [file,setFile]=useState({})
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      photo: null,
      adresse:"",
      numero:"",
    },
    onSubmit: async (values) => {
      console.log(values.photo)
      const im = new FormData();
      im.append("file",file);
      const response = await axios.post("http://localhost:4000/upload", im);
      const productWithCover = { ...values, photo: response.data.path };
      console.log("Form submitted with data:", productWithCover);
      dispatch(addclient(productWithCover));
    },
  });
  return (

    <div>
      <div>
      <Link to={"/clients"}>
        <button type="button" class="btn btn-dark rounded-pill ml-2 mt-2"><ArrowBackIcon/></button>
        </Link>
      </div>
    <div className="d-flex align-items-center  justify-content-center" >
    <form onSubmit={formik.handleSubmit}>
      <div className="d-flex align-items-center justify-content-center pb-4">
      <h2>Ajouter un Client</h2>
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

<p className="mb-0 mt-3">adresse</p>
      <Input
        label="adresse"
        name="adresse"
        onChange={formik.handleChange}
        value={formik.values.adresse}
        required
      />
      <p className="mb-0 mt-3">numero</p>
      <Input
        label="numero"
        name="numero"
        onChange={formik.handleChange}
        value={formik.values.numero}
        required
      />


      <p className="mb-0 mt-3">Inserer une image</p>
      <input
        type="file"
        size="sm"
        name="photo"
        onChange={(e)=>{
          setFile(e.target.files[0])
        }}
        value={formik.values.photo}
        required
        className="mb-5"
        />
        <br />  
        <div className="d-flex align-items-center  justify-content-center">
      <Button color="green" type="submit">Submit</Button>

        </div>
        <div>

        <p> (<span className="text-danger">*</span>)  est obligatoire   </p>
        </div>
    </form>
        </div>
        </div>  )
}

export default AddClient
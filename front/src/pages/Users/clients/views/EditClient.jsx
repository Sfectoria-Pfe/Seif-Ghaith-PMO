import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getclient, updateclient } from "../../../../store/client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const Store = useSelector((state) => state.client);
  const [data, setData] = useState({});
  const [file, setFile] = useState({});
  
  useEffect(() => {
    dispatch(getclient(+id));
  }, []);
  
  useEffect(() => {
    setData(Store.client);
  }, [Store]);
  
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
   
    e.preventDefault(); 
    
    const args = { id: +id, body: data };
    await dispatch(updateclient(args)).then((res) => {if (!res.error) {
        navigate(-1);
      } else {
        alert("eroor");
      }
    });
  }


  return (
    <div>
{        console.log(data)
}      <div>
        <Link to={"/clients"}>
          <button type="button" class="btn btn-dark rounded-pill ml-2 mt-2">
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center  justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center justify-content-center pb-4">
            <h2>Modifier un Client </h2>
          </div>
          <p className="mb-0">First name</p>

          <input
             label="first name"
             name="first_name"        
             onChange={handleChange}
            value={data?.first_name}
            
          />
          <p className="mb-0 mt-3">Last name</p>
          <input
            label="Last name"
            name="last_name"
            onChange={handleChange}
            value={data.last_name}
            
          />

          <p className="mb-0 mt-3">Email address</p>
          <input
            type="email"
            label="Email address"
            name="email"
            onChange={handleChange}
            value={data?.email}
            
          />
          <p className="mb-0 mt-3">Address</p>
          <input
            type="string"
            label="adresse"
            name="adresse"
            onChange={handleChange}
            value={data.adresse}
            
          />
          <p className="mb-0 mt-3">numero</p>

          <input
            type="string"
            label="numero"
            name="numero"
            onChange={handleChange}
            value={data.numero}
            
          />


          <p className="mb-0 mt-3">Inserer une image</p>
          <input
            type="file"
            size="sm"
            name="photo"
            onChange={async (e) => {
              setFile(e.target.files[0]);
              const im = new FormData();
    im.append("file", file);
    const response = await axios.post("http://localhost:4000/upload", im);
    // console.log(response.data);
    data = { ...data , photo: response.data.path };

            }}            
            className="mb-5"
          />
          <br />
          <div className="d-flex align-items-center  justify-content-center">
            <Button color="green" type="submit" >
              Submit
            </Button>
          </div>
          <div>
            <p>
             
              (<span className="text-danger">*</span>) est obligatoire{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditClient;

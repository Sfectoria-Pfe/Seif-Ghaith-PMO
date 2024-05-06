import React, { useEffect, useState } from "react";
import { addreclamation } from "../../../src/store/reclamation";
import { Link } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { getclients } from "../../store/client";

function AddReclamation() {
  const Store = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const filter = createFilterOptions();

  useEffect(() => {
    dispatch(getclients());
  }, []);
  const clientName = Store.clients?.map((client) => ({
    label: client.first_name,
    clientId: client.id,
  }));

  console.log(clientName, "this is the array of clients");

  const [data, setData] = useState({
    clientId: "",
    titel: "",
    description: "",
    image: "",
  });

  function handle(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  function handelSubmit(e) {
    e.preventDefault();
    console.log(data, "hhhhhh");
    dispatch(addreclamation(data));
  }
  return (
    <></>
  )

  // return (
  //   <div>
  //     <div>
  //       <Link to={"/reclamation"}>
  //         <button type="button" className="btn btn-dark rounded-pill ml-2 mt-2">
  //           <ArrowBackIcon />
  //         </button>
  //       </Link>
  //     </div>
  //     <div className="d-flex align-items-center  justify-content-center">
  //       <form onSubmit={handelSubmit}>
  //         <div className="d-flex align-items-center justify-content-center pb-4">
  //           <h2>Ajouter une Reclamation</h2>
  //         </div>
  //         <p className="mb-0">Client name</p>
  //         <Autocomplete
  //           name="clientId"
  //           sx={{ width: 300 }}
  //           selectOnFocus
  //           clearOnBlur
  //           handleHomeEndKeys
  //           freeSolo
  //       id="free-solo-2-demo"
  //           options={clientName}
  //           onChange={(event, value) => {
  //             setData((prev) => {return { ...prev, clientId: value.clientId }});

  //           }}

  //           filterOptions={(options, params) => {
  //             const filtered = filter(options, params);
      
  //             // Suggest the creation of a new value
  //             if (params.inputValue !== '') {
  //               filtered.push({
  //                 // inputValue : params.inputValue,
  //                 title: `Asmmsdd "${params.inputValue}"`,
  //               });
  //             }
      
  //             return filtered;
  //           }}
  //           renderInput={(params) => (
  //             <TextField {...params} label="Client name" />
  //           )}
  //           required
  //         />
  //               <Autocomplete
  //       freeSolo
  //       id="free-solo-2-demo"
  //       disableClearable
  //       filterOptions={(options, params) => {
  //         const filtered = filter(options, params);
  
  //         // Suggest the creation of a new value
  //         if (params.inputValue !== '') {
  //           filtered.push({
  //             // inputValue : params.inputValue,
  //             title: `Asmmsdd "${params.inputValue}"`,
  //           });
  //         }
  
  //         return filtered;
  //       }}
  //       renderInput={(params) => (
  //         <TextField {...params} label="Client name" />
  //       )}
  //       required
  //     />

  //         <p className="mb-0 mt-3">Title</p>
  //         <Input
  //           label="Title"
  //           name="titel"
  //           onChange={handle}
  //           value={data.last_name}
  //           required
  //         />
  //         <p className="mb-0 mt-3">Description</p>
  //         <Textarea
  //           label="Description"
  //           name="description"
  //           onChange={handle}
  //           value={data.email}
  //           required
  //         />

  //         <p className="mb-0 mt-3">Inserer une image</p>
  //         <input
  //           type="file"
  //           size="sm"
  //           name="image"
  //           onChange={handle}
  //           value={data.photo}
  //           required
  //           className="mb-5"
  //         />
  //         <br />
  //         <div className="d-flex align-items-center  justify-content-center">
  //           <Button color="black" type="submit" onClick={handelSubmit}>
  //             Submit
  //           </Button>
  //         </div>
  //         <div>
  //           <p>
  //             {" "}
  //             (<span className="text-danger">*</span>) est obligatoire{" "}
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
}

export default AddReclamation;

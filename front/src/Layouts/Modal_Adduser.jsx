import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Button, Input, Option, Select} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addemployee } from "../store/empolyee";
import axios from "axios";

function Modal_Adduser({ show, setShow ,setupdate, update }) {
  const dispatch = useDispatch();
  const handleUpdate = () => setupdate(!update);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    photo: null,
    role: "",
  });
  const handleChange = (e) => {
    if (e=="technicien" || e=="admin"|| e=="manager"|| e=="receptionist"){
      setFormData({
        ...formData,
        role: e,
      }); 
    }else{
      const { name, value, type } = e.target;
      const newValue = type === "file" ? e.target.files[0] : value;
      // console.log(e.target.files,"message");
      setFormData({
        ...formData,
        [name]: newValue,
      });
      
    }
    console.log(formData);
  };
  const  handleSubmit = async (e) => {
    e.preventDefault();
    const im = new FormData();
    im.append("file", formData.photo);
    console.log(im,"ssss")

    const response = await axios.post(
      "http://localhost:3000/upload",
      im
    );
    console.log(response)
    const productWithCover = { ...formData, photo: response.data.path };

    console.log("Form submitted with data:", productWithCover);
    dispatch(addemployee(productWithCover));
    handleClose()
};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className="flex items-center gap-3"
        onClick={handleShow}
        size="sm"
      >
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter un
         employé
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First name</Form.Label>
              <Input
                label="First name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last name</Form.Label>
              <Input
                label="Last name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Input
                type="email"
                label="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Password</Form.Label>
              <Input
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Select
                // label="Selectionner le Role"
                name="role"
                value={formData.category}
                onChange={handleChange}
              >
                <Option value="receptionist">Receptionniste</Option>
                <Option value="technicien">Technicient</Option>
                <Option value="admin">admin</Option>
                <Option value="manager">manager</Option>
              </Select>
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Inserer une image</Form.Label>
              <Form.Control
                type="file"
                size="sm"
                name="photo"
                onChange={handleChange}
                />
              
            </Form.Group>
        <Modal.Footer>
          <Button variant="filled" color="blue" type="submit" onClick={handleUpdate}>
            Save Changes
          </Button>
          <Button variant="outlined" color="red" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
                </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal_Adduser;

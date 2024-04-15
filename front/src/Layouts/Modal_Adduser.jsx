import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Button, Input, Option, Select} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addemployee } from "../store/empolyee";

function Modal_Adduser({ show, setShow ,setupdate, update }) {
  const dispatch = useDispatch();
  const handleUpdate = () => setupdate(!update);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    photo: null,
    role: "",
    password:"",
  });

  const handleChange = (e) => {
    if (e=="Receptionniste" || e=="Technicient"){
      setFormData({
        ...formData,
        role: e,
      }); 
    }else{
      const { name, value, type } = e.target;
      // console.log(e.target);
      const newValue = type === "photo" ? e.target.files[0] : value;
      setFormData({
        ...formData,
        [name]: newValue,
      });
      
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    dispatch(addemployee(formData));
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Password</Form.Label>
              <Input
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Select
                // label="Selectionner le Role"
                name="role"
                value={formData.category}
                onChange={handleChange}
              >
                <Option value="Receptionniste">Receptionniste</Option>
                <Option value="Technicient">Technicient</Option>
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

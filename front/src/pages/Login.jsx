import React, { useState } from "react";
import LogoImg from "../images/LogoImg.jpg";
import { useDispatch } from "react-redux";
import { login } from "../store/auth";
import { Input } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(login(state)).then((res) => {
      if (!res.error) {
      } else {
        toast.error("veuillez verifier vos donnees.");
      }
    })
    .catch(() => {
      toast.error("veuillez verifier vos donnees.");
    })
  };

  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      <div className=" col-md-5 d-flex justify-content-center">
        <img
          style={{
            height: "80%",
            width: "100%",
            objectFit:"cover"
          }}
          src={LogoImg}
          alt="logoImage"
        />
      </div>
      <div className=" col-md-7  col-12 d-flex   align-items-center flex-column">
        <div>
          <p
            className="text-center"
            style={{
              color: "#000000",
              fontSize: 26,
              fontWeight: "bold",
              paddingTop: 50,
            }}
          >
            se connecter
          </p>
          <div style={{ paddingBottom: 30 }}>
            <p style={{ color: "#7C838A", fontSize: 20 }}>Email</p>
            <Input
              type="text"
              placeholder="Email"
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                width: 500,
              }}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div style={{ paddingBottom: 30 }}>
            <p style={{ color: "#7C838A", fontSize: 20 }}>Password</p>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              style={{
                paddingBottom: 10,
                width: 500,
              }}
            ></Input>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ paddingBottom: 30 }}
          >
            <button
              className="px-5"
              style={{
                backgroundColor: "black",
                border: 0,
                paddingBottom: 10,
                paddingTop: 10,
                borderRadius: 10,
                fontWeight: 550,
                fontSize: 20,
                width: 300,
                color:"white"
              }}
              onClick={handleSubmit}
            >
              <span className="">

              Se connecter
              </span>
            </button>
            <div>

      <ToastContainer className="toast-position" position="top-center"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;

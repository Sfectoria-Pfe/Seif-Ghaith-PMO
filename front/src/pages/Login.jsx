import React, { useState } from "react";
import "./login.css";
import LogoImg from "../images/LogoImg.png";
import { useDispatch } from "react-redux";
import { login } from "../store/auth";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(login(state));
  };

  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      <div className=" col-md-4 d-flex justify-content-center">
        <img
          style={{
            height: "70%",
            width: "70%",
          }}
          src={LogoImg}
          alt="logoImage"
        />
      </div>
      <div className=" col-md-8  col-12 d-flex   align-items-center flex-column">
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
            login
          </p>
          <div style={{ paddingBottom: 30 }}>
            <p style={{ color: "#7C838A", fontSize: 20 }}>Email</p>
            <input
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
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              style={{
                paddingBottom: 10,
                width: 500,
              }}
            ></input>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ paddingBottom: 30 }}
          >
            <button
              className="px-5"
              style={{
                backgroundColor: "#F9ED32",
                border: 0,
                paddingBottom: 10,
                paddingTop: 10,
                borderRadius: 10,
                fontWeight: 550,
                fontSize: 20,
                width: 300,
              }}
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <p style={{ color: "#7C838A", fontSize: 12 }}>
              Don't have an account? Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

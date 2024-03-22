import React from "react";
import "./Singup.css";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
// import logo from "../images/aabb.png"

function Singup() {
  const Login = () => {
    alert("hellooo");
  };
  return (
    <div>
      <div className=" shadow-sm">
        <div className="d-flex">
          <div className="col-md-4">
            <img
              alt="imakkge"
              src="https://img.freepik.com/free-vector/minimalistic-style-abstract-blurred-yellow-gradient-banner-vector_1017-49017.jpg?w=996&t=st=1710988633~exp=1710989233~hmac=a8a7ec70dbe3b58ceb78546375f513947945e2c04cc0df31f39822bc5f05e2c0"
              style={{
                borderRadius: "1%",
                width: "100%",
                height: "100%",
                objectfit: "contain",
              }}
            />
          </div>
          <div className="col-md-8 d-flex justify-content-center col-12  ">
            <div className="mx-auto cont">
              <p className="titre">Create your Free Account</p>
              <div className="elem">
                <p className="p1">Full Name </p>
                <input name="name" placeholder="Enter your Full Name here" className="form-control" />
              </div>
              <div className="elem">
                <p className="p1">Email </p>
                <input placeholder="Enter your Email here" />
              </div>
              <div className="elem">
                <p className="p1">Password </p>
                <input placeholder="Enter your Password here" />
              </div>
              <div className="d-flex flex-column align-items-center pb-3">
                <button className="btn1"> Create Account</button>
              </div>

              <p>
                Already have an account ? <span onClick={Login}>Login</span>
              </p>

              <div className="d-flex flex-column align-items-center">
                <p className="or">- OR -</p>
                <div className="d-flex justify-content-between col-10">
                  <button className="btn2 p-2">
                    <GoogleIcon /> Sing up with Google
                  </button>
                  <button className="btn2">
                    <GitHubIcon /> Sing up with GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;

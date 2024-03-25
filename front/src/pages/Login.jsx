import React from "react";
import "./login.css"

function Login() {
  return (
    <div className="d-flex" style={{  borderRadius: "1%", fontFamily: "Poppins"}}>
      <div className=" col-md-6 ">
        <img
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "1%",
            objectfit: "contain",
          }}
          src="data:image/jpeg;base64,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"
        ></img>
      </div>
      <div className="col-md-6  col-12 ">
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
        <div  style={{ paddingBottom: 30 }}>
          <p style={{ color: "#7C838A", fontSize: 20 }}>Email</p>
          <input className="d-flex align-items-center flex-column form-control"
            type="text"
            placeholder="Email"
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              width:500
            }}
            
          />
        </div>
        <div style={{ paddingBottom: 30 }}>
          <p style={{ color: "#7C838A", fontSize: 20 }}>Password</p>
          <input
            type="password"
            name="passsword"
            placeholder="Password"
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              width:500
            }}
            className="form-control d-flex align-items-center flex-column"
          ></input>
        </div>
        <div
          className="d-flex align-items-center flex-column"
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
              fontFamily: "Poppins",
            }}
          >
            Login
          </button>
        </div>
        <div>
          <p className="text-center" style={{ color: "#7C838A", fontSize: 12 }}>
            Don't have an account? Register
          </p>
        </div>
      </div>
    </div>
//     <section class="vh-100">
//   <div class="container-fluid">
//     <div class="row">
//       <div class="col-sm-6 text-black">

//         <div class="px-5 ms-xl-4">
//           <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: "#709085"}}></i>
//           <span class="h1 fw-bold mb-0">Logo</span>
//         </div>

//         <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

//           <form style="width: 23rem;">

//             <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

//             <div class="form-outline mb-4">
//               <input type="email" id="form2Example18" class="form-control form-control-lg" />
//               <label class="form-label" for="form2Example18">Email address</label>
//             </div>

//             <div class="form-outline mb-4">
//               <input type="password" id="form2Example28" class="form-control form-control-lg" />
//               <label class="form-label" for="form2Example28">Password</label>
//             </div>

//             <div class="pt-1 mb-4">
//               <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
//             </div>

//             <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
//             <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

//           </form>

//         </div>

//       </div>
//       <div class="col-sm-6 px-0 d-none d-sm-block">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
//           alt="Login image" class="w-100 vh-100" style={{objectFit: "cover", objectPosition: "left"}}/>
//       </div>
//     </div>
//   </div>
// </section>
  );
}

export default Login;

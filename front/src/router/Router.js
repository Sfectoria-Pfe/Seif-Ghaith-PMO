import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../App";
import Employees from "../pages/Users/Employees";
import Clients from "../pages/Users/Clients";

function Router() {
  const [user, setUser] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
      {user ? (
          <Route path="/" element={<App/>}>
            <Route path="employees" element={<Employees/>} />
            <Route path="clients" element={<Clients/>} />

          </Route>
        ) : (
          <Route path="/">
          <Route index element={<Login/>} />
          <Route path="/signup" element={<Singup/>} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

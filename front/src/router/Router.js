import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "../pages/Dashboard";
import Client from "../pages/Client";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Main from "../apps/Main";
import Auth from "../apps/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../store/auth";
import Spinner from "react-bootstrap/Spinner";
import FicheIentervention from "../pages/FicheIentervention";
import Reclamation from "../pages/Reclamation";

function Router() {
  const user = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getMe()).then((res) => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <BrowserRouter>
      {loading && (
        <div className="position-fixed w-100 h-100 bg-white justify-content-center align-items-center d-flex">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <Routes>
        {user ? (
          <Route path="/" element={<Main />}>
            <Route index element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/client" element={<Client />} />
            <Route path="/fiche" element={<FicheIentervention />} />
            <Route path="/reclamation" element={<Reclamation/>}/>
            
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

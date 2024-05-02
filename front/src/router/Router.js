import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Users/clients/views/Clients";
import Main from "../apps/Main";
import Auth from "../apps/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../store/auth";
import Spinner from "react-bootstrap/Spinner";
import FicheIentervention from "../pages/FicheIentervention";
import EmployeePage from "../pages/Users/employees/EmployeePage"
import AddEmplyee from "../pages/Users/employees/views/AddEmplyee"
import ClientsPage from "../pages/Users/clients/ClientsPage"
import AddClient from "../pages/Users/clients/views/AddClient";
import Inbox from "../pages/Inbox";
import Employees from "../pages/Users/employees/views/Employees";
import Reclamations from "../pages/Reclamation/views/Reclamations";
import AddReclamation from "../pages/Reclamation/views/AddReclamation";
import ReclamationPage from "../pages/Reclamation/ReclamationPage";
import EntreePage from "../pages/EntreeDevice/EntreePage";
import EntreeDevicee from "../pages/EntreeDevice/views/EntreeDevicee";
import AddEntree from "../pages/EntreeDevice/views/AddEntree";
import EditProfile from "../pages/profile/view/EditProfile";
import ProfilePage from "../pages/profile/ProfilePage";
import Profile from "../pages/profile/view/Profile";
import InvoiceForm from "../pages/InvoiceForm";
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
            <Route path="/clients" element={<Clients />} />
            <Route path="/fiche" element={<FicheIentervention/>} />
            <Route path="/reclamation" element={<ReclamationPage/>}>
            <Route index element={<Reclamations/>}/>
            <Route path="addreclamation" element={<AddReclamation/>}/>
            </Route>

            <Route path="/employees" element={<EmployeePage/>}>
            <Route index element={<Employees/>}/>
            <Route path="addEmployee" element={<AddEmplyee/>}/>
            </Route>
            <Route path="/clients" element={<ClientsPage/>}>
            <Route index element={<Clients/>}/>
            <Route path="addclient" element={<AddClient/>}/>
            </Route>
            <Route path="/inbox" element={<Inbox/>}/>
            <Route path="/entreedevice" element={<EntreePage/>}>
            <Route index element={<EntreeDevicee/>}/>
            <Route path="addband" element={<AddEntree/>}/>
            </Route>
            <Route path="/profile" element={<ProfilePage/>}>
              <Route index element={<Profile/>}/>
              <Route path="editprofile" element={<EditProfile/>}/>

            </Route>
            <Route path="/order" element={<InvoiceForm/>}/>

          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Singup/>} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

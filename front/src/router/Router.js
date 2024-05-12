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
import FicheIentervention from "../pages/Les Fiche d'intervention/views/FicheIentervention";
import EmployeePage from "../pages/Users/employees/EmployeePage";
import AddEmployee from "../pages/Users/employees/views/AddEmployee";
import ClientsPage from "../pages/Users/clients/ClientsPage";
import AddClient from "../pages/Users/clients/views/AddClient";
import Inbox from "../pages/inbox/Inbox";
import Employees from "../pages/Users/employees/views/Employees";
import Reclamations from "../pages/Reclamation/views/Reclamations";
import AddReclamation from "../pages/Reclamation/views/AddReclamation";
import ReclamationPage from "../pages/Reclamation/ReclamationPage";
import EntreePage from "../pages/EntreeDevice/EntreePage";
import EntreeDevicee from "../pages/EntreeDevice/views/EntreeDevicee";
import EditProfile from "../pages/Profile/view/EditProfile";
import ProfilePage from "../pages/Profile/ProfilePage";
import Profile from "../pages/Profile/view/Profile";
import EditReclamation from "../pages/Reclamation/views/EditReclamation";
import EditEntree from "../pages/EntreeDevice/views/EditEntree";
import Order from "../pages/order/views/Order";
import OrderPage from "../pages/order/OrderPage";
import EditEmployee from "../pages/Users/employees/views/EditEmployee";
import EditClient from "../pages/Users/clients/views/EditClient";
import AddEntree from "../pages/EntreeDevice/views/AddEntree";
import Users from "../pages/Users/users/Views/Users";
import UsersPage from "../pages/Users/users/UsersPage";
import AddUser from "../pages/Users/users/Views/AddUsers";
import OrdreReparation from "../pages/Ordre_Reparation/Views/OrdreReparation";
import OrdreReparationPage from "../pages/Ordre_Reparation/OrdreReparationPage";
import AddOrder from "../pages/order/views/AddOrder";
import AddOrderReparation from "../pages/Ordre_Reparation/Views/AddOrderReparation";
import FicheInterventionPage from "../pages/Les Fiche d'intervention/FicheInterventionPage";
import AddFicheIentervention from "../pages/Les Fiche d'intervention/views/AddFicheIntervention";
import AddEtape from "../components/AddEtape";
import EditOrderReparation from "../pages/Ordre_Reparation/Views/EditOrderReparation";
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
            <Route
              path="/fiches_intervention"
              element={<FicheInterventionPage />}
            >
              <Route index element={<FicheIentervention />} />
              <Route
                path="addfiche_intervention"
                element={<AddFicheIentervention />}
              />
            </Route>
            <Route path="/reclamations" element={<ReclamationPage />}>
              <Route index element={<Reclamations />} />
              <Route path="addreclamation" element={<AddReclamation />} />
              <Route path="editreclamation/:id" element={<EditReclamation />} />
            </Route>

            <Route path="/users" element={<UsersPage />}>
              <Route index element={<Users />} />
              <Route path="addUser" element={<AddUser />} />
            </Route>

            <Route path="/employees" element={<EmployeePage />}>
              <Route index element={<Employees />} />
              <Route path="addEmployee" element={<AddEmployee />} />
              <Route path="editEmployee/:id" element={<EditEmployee />} />
            </Route>

            <Route path="/clients" element={<ClientsPage />}>
              <Route index element={<Clients />} />
              <Route path="addclient" element={<AddClient />} />
              <Route path="editClient/:id" element={<EditClient />} />
            </Route>

            <Route path="/orderReparation" element={<OrdreReparationPage />}>
              <Route index element={<OrdreReparation />} />
              <Route
                path="addorderreparation"
                element={<AddOrderReparation />}
              />
              <Route path="editorder/:id" element={<EditOrderReparation />} />

              <Route path="addetape/:id" element={<AddEtape />} />
            </Route>

            <Route path="/inbox" element={<Inbox />} />
            <Route path="/entreedevices" element={<EntreePage />}>
              <Route index element={<EntreeDevicee />} />
              <Route path="addband" element={<AddEntree />} />
              <Route path="editentree/:id" element={<EditEntree />} />
            </Route>

            <Route path="/profile" element={<ProfilePage />}>
              <Route index element={<Profile />} />
              <Route path="editprofile" element={<EditProfile />} />
            </Route>

            <Route path="/orders" element={<OrderPage />}>
              <Route index element={<Order />} />
              <Route path="addorder" element={<AddOrder />} />
            </Route>
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Singup />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

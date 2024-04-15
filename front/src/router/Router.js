import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login"
import Singup from "../pages/Singup"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';

import Dashboard from '../pages/Dashboard';
import Client from '../pages/Client';
import Profile from "../pages/Profile";


function Router(){
    return(
        <BrowserRouter>
        <Routes>
            
            <Route path='/' element={<App/>} >
            <Route index element={<Dashboard/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            
            </Route>
            <Route path='/client' element={<Client/>}/>
            

            
            <Route path='/login' element={<Login/>}/>
            

        </Routes>
        </BrowserRouter>
        
    )

}
export default Router;

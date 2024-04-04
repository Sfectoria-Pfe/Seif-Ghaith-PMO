import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login"
import Singup from "../pages/Singup"
import Navbar from '../Layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technicien from "../pages/Technicien";


function Router(){
    return(
        <BrowserRouter>
        <Routes>
            
            <Route index element={<Technicien/>} />

            <Route path='/singup' element={<Singup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/navbar' element={<Navbar/>}/>

        </Routes>
        </BrowserRouter>
        
    )

}
export default Router


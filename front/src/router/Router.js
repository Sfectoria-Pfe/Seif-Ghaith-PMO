import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login"
import Singup from "../pages/Singup"
import Navbar from '../Layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/singup' element={<Singup/>}/>
            <Route path='/navbar' element={<Navbar/>}/>

        </Routes>
        </BrowserRouter>
        
    )

}
export default Router


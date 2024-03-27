import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login"
import Singup from "../pages/Singup"

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/singup' element={<Singup/>}/>

        </Routes>
        </BrowserRouter>
        
    )

}
export default Router


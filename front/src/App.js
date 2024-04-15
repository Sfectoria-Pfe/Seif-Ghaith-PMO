import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layouts/Navbar';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div>
    <Navbar/>
        <Outlet/>
    </div>
    
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { Provider } from 'react-redux';
import { store } from "./store/store";
import Router from './router/Router';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <LocalizationProvider dateAdapter={AdapterDayjs}>

  <Provider store={store}>
  <React.StrictMode>


    
     <Router/>
     
     
  </React.StrictMode>
  </Provider>

  </LocalizationProvider>

);


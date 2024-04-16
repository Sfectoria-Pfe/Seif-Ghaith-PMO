import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./store/store";
import Router from "./router/Router";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Provider store={store}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </Provider>
  </LocalizationProvider>
    
  );
}

export default App;
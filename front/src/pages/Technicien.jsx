import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getemployees } from "../store/empolyee";
import {useEffect} from 'react';


function User_Technicien() {
  const employeeStore = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getemployees());
  }, []);
  console.log(employeeStore.employees, " store user ");

  return <div>


  </div>;
}

export default User_Technicien;

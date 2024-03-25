import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getemployees = createAsyncThunk("getemployees", async () => {
    try {
      const res = await axios.get("http://localhost:3000/employees");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getemployee = createAsyncThunk("getemployee", async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/employees/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updateemployee = createAsyncThunk("updateemployee", async (args) => {
    const {id,body} = args
    try {
      const res = await axios.put(`http://localhost:3000/employees/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addemployee = createAsyncThunk("addemployee", async (body) => {
    try {
      const res = await axios.post(`http://localhost:3000/employees`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deleteemployee = createAsyncThunk("deleteemployee",  async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/employees/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    employee: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getemployees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });

    builder.addCase(getemployee.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    builder.addCase(updateemployee.fulfilled, (state, action) => {
        state.employees = action.payload;
      });
      builder.addCase(addemployee.fulfilled, (state, action) => {
        state.employees = action.payload;
      });
      builder.addCase(deleteemployee.fulfilled, (state, action) => {
        state.employees = action.payload;
      });
  },
});
export default employeeSlice.reducer;

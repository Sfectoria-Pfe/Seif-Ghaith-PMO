import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getreclamations = createAsyncThunk("getreclamations", async () => {
    try {
      const res = await axios.get("http://localhost:3000/reclamations");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getreclamation = createAsyncThunk("getreclamation", async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/reclamation/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updatereclamation = createAsyncThunk("updatereclamation", async (args) => {
    const {id,body} = args
    try {
      const res = await axios.put(`http://localhost:3000/reclamations/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addreclamation = createAsyncThunk("addreclamation", async (body) => {
    try {
      const res = await axios.post(`http://localhost:3000/reclamations`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deletereclamation = createAsyncThunk("deletereclamation",  async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/reclamations/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const reclamationSlice = createSlice({
  name: "reclamation",
  initialState: {
    reclamations: [],
    reclamation: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getreclamations.fulfilled, (state, action) => {
      state.reclamations = action.payload;
    });

    builder.addCase(getreclamation.fulfilled, (state, action) => {
      state.reclamation = action.payload;
    });
    builder.addCase(updatereclamation.fulfilled, (state, action) => {
        state.reclamations = action.payload;
      });
      builder.addCase(addreclamation.fulfilled, (state, action) => {
        state.reclamations = action.payload;
      });
      builder.addCase(deletereclamation.fulfilled, (state, action) => {
        state.reclamations = action.payload;
      });
  },
});
export default reclamationSlice.reducer;

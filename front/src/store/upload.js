import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addupload = createAsyncThunk(
    "addupload",
    async (body) => {
      try {
        const res = await axios.post("http://localhost:4000/upload", body);
        return res.data.path;
      } catch (error) {
        console.log(error);
      }
    }
  );
export const uploadSlice = createSlice({
    name: "upload",
    initialState: {
      uploads: [],
      upload: {},
    },
    reducers: {},
    extraReducers: (builder) => {
               
      builder.addCase(addupload.fulfilled, (state, action) => {
        state.uploads = action.payload;
      });

    },
  });
  export default uploadSlice.reducer;
  
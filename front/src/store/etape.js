import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteRequestWithHeader, getRequestWithHeader, postRequestWithHeader, putRequestWithHeader } from "../helpers/axiosRequests";

export const getetapes = createAsyncThunk("getetapes", async () => {
    try {
      const res = await getRequestWithHeader("etapes");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getetape = createAsyncThunk("getetape", async (id) => {
    try {
      const res = await getRequestWithHeader(`etapes/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updateetape = createAsyncThunk("updateetape", async (args) => {
    const {id,body} = args
    try {
      const res = await putRequestWithHeader(`etapes/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addetape = createAsyncThunk("addetape", async (body) => {
    try {
      const res = await postRequestWithHeader(`etapes`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deleteetape = createAsyncThunk("deleteetape",  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`etapes/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const etapeSlice = createSlice({
  name: "etape",
  initialState: {
    etapes: [],
    etape: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getetapes.fulfilled, (state, action) => {
      state.etapes = action.payload;
    });

    builder.addCase(getetape.fulfilled, (state, action) => {
      state.etape = action.payload;
    });
    builder.addCase(updateetape.fulfilled, (state, action) => {
        state.etapes = action.payload;
      });
      builder.addCase(addetape.fulfilled, (state, action) => {
        state.etapes = action.payload;
      });
      builder.addCase(deleteetape.fulfilled, (state, action) => {
        state.etapes = action.payload;
      });
  },
});
export default etapeSlice.reducer;

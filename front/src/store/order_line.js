import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteRequestWithHeader, getRequestWithHeader, postRequestWithHeader, putRequestWithHeader } from "../helpers/axiosRequests";


export const getorder_lines = createAsyncThunk("getorder_lines", async () => {
    try {
      const res = await getRequestWithHeader("order-lines");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getorder_line = createAsyncThunk("getorder_line", async (id) => {
    try {
      const res = await getRequestWithHeader(`order-lines/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updateorder_line = createAsyncThunk("updateorder_line", async (args) => {
    const {id,body} = args
    try {
      const res = await putRequestWithHeader(`order-lines/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addorder_line = createAsyncThunk("addorder_line", async (body) => {
    try {
      const res = await postRequestWithHeader(`order-lines`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deleteorder_line = createAsyncThunk("deleteorder_line",  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`order-lines/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const order_lineSlice = createSlice({
  name: "order_line",
  initialState: {
    order_lines: [],
    order_line: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getorder_lines.fulfilled, (state, action) => {
      state.order_lines = action.payload;
    });

    builder.addCase(getorder_line.fulfilled, (state, action) => {
      state.order_line = action.payload;
    });
    builder.addCase(updateorder_line.fulfilled, (state, action) => {
        state.order_lines = action.payload;
      });
      builder.addCase(addorder_line.fulfilled, (state, action) => {
        state.order_lines = action.payload;
      });
      builder.addCase(deleteorder_line.fulfilled, (state, action) => {
        state.order_lines = action.payload;
      });
  },
});
export default order_lineSlice.reducer;

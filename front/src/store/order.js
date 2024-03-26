import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteRequestWithHeader, getRequestWithHeader, postRequestWithHeader, putRequestWithHeader } from "../helpers/axiosRequests";

export const getorders = createAsyncThunk("getorders", async () => {
    try {
      const res = await getRequestWithHeader("orders");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getorder = createAsyncThunk("getorder", async (id) => {
    try {
      const res = await getRequestWithHeader(`orders/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updateorder = createAsyncThunk("updateorder", async (args) => {
    const {id,body} = args
    try {
      const res = await putRequestWithHeader(`orders/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addorder = createAsyncThunk("addorder", async (body) => {
    try {
      const res = await postRequestWithHeader(`orders`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deleteorder = createAsyncThunk("deleteorder",  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`orders/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    order: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getorders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });

    builder.addCase(getorder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(updateorder.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
      builder.addCase(addorder.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
      builder.addCase(deleteorder.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});
export default orderSlice.reducer;

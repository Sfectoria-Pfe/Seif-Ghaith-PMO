import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequestWithHeader,
  getRequestWithHeader,
  postRequestWithHeader,
  putRequestWithHeader,
} from "../helpers/axiosRequests";

export const getorderreparations = createAsyncThunk(
  "getorderreparations",
  async () => {
    try {
      const res = await getRequestWithHeader("orderreparations");
      console.log(res, "resssssssssssssssssssssssssssssssssssss");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getorderreparation = createAsyncThunk(
  "getorderreparation",
  async (id) => {
    try {
      const res = await getRequestWithHeader(`orderreparations/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateorderreparation = createAsyncThunk(
  "updateorderreparation",
  async (args, dispatch) => {
    const { id, body } = args;
    try {
      const res = await putRequestWithHeader(`orderreparations/${id}`, body);
      dispatch(getorderreparations());
    } catch (error) {
      console.log(error);
    }
  }
);

export const addorderreparation = createAsyncThunk(
  "addorderreparation",
  async (body) => {
    try {
      const res = await postRequestWithHeader(`orderreparations`, body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteorderreparation = createAsyncThunk(
  "deleteorderreparation",
  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`orderreparations/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const orderreparationSlice = createSlice({
  name: "orderreparation",
  initialState: {
    orderreparations: [],
    orderreparation: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getorderreparations.fulfilled, (state, action) => {
      state.orderreparations = action.payload;
    });

    builder.addCase(getorderreparation.fulfilled, (state, action) => {
      state.orderreparation = action.payload;
    });
    // builder.addCase(updateorderreparation.fulfilled, (state, action) => {
    //     state.orderreparations = action.payload;
    //   });
    builder.addCase(addorderreparation.fulfilled, (state, action) => {
      state.orderreparations = [...state.orderreparations, action.payload];
    });
    builder.addCase(deleteorderreparation.fulfilled, (state, action) => {
      state.orderreparations = action.payload;
    });
  },
});
export default orderreparationSlice.reducer;

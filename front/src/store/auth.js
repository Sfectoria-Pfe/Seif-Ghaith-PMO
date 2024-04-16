import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequestWithHeader,
  getRequestWithHeader,
  postRequestWithHeader,
  putRequestWithHeader,
} from "../helpers/axiosRequests";

export const login = createAsyncThunk("login", async (body,{dispatch}) => {
  // try {
    const res = await postRequestWithHeader("auth/login", body);
    console.log(res.data,'token');
    localStorage.setItem("token", res.data);
    dispatch(getMe())
  // } catch (error) {
  //   console.log(error);
  // }
});

export const getMe = createAsyncThunk("getMe", async (id) => {
  try {
    const res = await getRequestWithHeader(`auth/me`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.me = action.payload;
    });
  },
});
export default authSlice.reducer;

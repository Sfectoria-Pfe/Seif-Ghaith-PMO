import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequestWithHeader,
  getRequestWithHeader,
  postRequestWithHeader,
  putRequestWithHeader,
} from "../helpers/axiosRequests";

export const login = createAsyncThunk("login", async (body,{dispatch}) => {
    const res = await postRequestWithHeader("auth/login", body);
    console.log(res.data,'token');
    localStorage.setItem("token", res.data);
    dispatch(getMe())
});

export const getMe = createAsyncThunk("getMe", async (id) => {

    const res = await getRequestWithHeader(`auth/me`);
    return res.data;

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

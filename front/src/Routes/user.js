import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("getUsers", async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getUser = createAsyncThunk("getUser", async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updateUser = createAsyncThunk("updateUser", async (args) => {
    const {id,body} = args
    try {
      const res = await axios.put(`http://localhost:3000/users/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addUser = createAsyncThunk("addUser", async (body) => {
    try {
      const res = await axios.post(`http://localhost:3000/users`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deleteUser = createAsyncThunk("deleteUser",  async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/users/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
      builder.addCase(addUser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
      builder.addCase(deleteUser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});
export default userSlice.reducer;

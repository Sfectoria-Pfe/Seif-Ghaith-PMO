import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequestWithHeader,
  getRequestWithHeader,
  postRequestWithHeader,
  putRequestWithHeader,
} from "../helpers/axiosRequests";

export const filterentree_lastname = createAsyncThunk(
  "filterentree_lastname",
  async (str) => {
    try {
      const res = await getRequestWithHeader("entree-devices");
    return res.data.filter((elem) => {
        return ( 
          elem.Client.first_name?.toUpperCase().includes(str.toUpperCase()) ||
          elem.Client.last_name?.toUpperCase().includes(str.toUpperCase()) ||
          elem.title?.toUpperCase().includes(str.toUpperCase()) ||
          elem.description?.toUpperCase().includes(str.toUpperCase())
        )
      });
    
    } catch (error) {
      console.log(error);
    }
  }
);

export const getentree_devices = createAsyncThunk(
  "getentree_devices",
  async () => {
    try {
      const res = await getRequestWithHeader("entree-devices");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getentree_device = createAsyncThunk(
  "getentree-device",
  async (id) => {
    try {
      const res = await getRequestWithHeader(`entree-devices/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateentree_device = createAsyncThunk(
  "updateentree-device",
  async (args) => {
    const { id, body } = args;
    try {
      const res = await putRequestWithHeader(`entree-devices/${id}`, body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addentree_device = createAsyncThunk(
  "addentree-device",
  async (body) => {
    try {
      const res = await postRequestWithHeader(`entree-devices`, body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteentree_device = createAsyncThunk(
  "deleteentree-device",
  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`entree-devices/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const entree_deviceSlice = createSlice({
  name: "entree_device",
  initialState: {
    entree_devices: [],
    entree_device: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getentree_devices.fulfilled, (state, action) => {
      state.entree_devices = action.payload;
    });

    builder.addCase(getentree_device.fulfilled, (state, action) => {
      state.entree_device = action.payload;
    });
    builder.addCase(updateentree_device.fulfilled, (state, action) => {
      state.entree_devices = action.payload;
    });
    builder.addCase(addentree_device.fulfilled, (state, action) => {
      state.entree_devices = action.payload;
    });
    builder.addCase(deleteentree_device.fulfilled, (state, action) => {
      state.entree_devices = action.payload;
    });
    builder.addCase(filterentree_lastname.fulfilled, (state, action) => {
      state.entree_devices = action.payload;
    });
  },
});
export default entree_deviceSlice.reducer;

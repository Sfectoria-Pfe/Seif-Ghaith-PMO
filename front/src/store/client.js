import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequestWithHeader, getRequestWithHeader, postRequestWithHeader, putRequestWithHeader } from "../helpers/axiosRequests";

export const filterclients_lastname = createAsyncThunk("filterclients_lastname", async (str) => {
  try {
    const res = await getRequestWithHeader("clients");
    return res.data.filter((elem) => {
      return (
          elem.first_name.toUpperCase().includes(str.toUpperCase()) ||
          elem.last_name.toUpperCase().includes(str.toUpperCase())
      );
  });  } catch (error) {
    console.log(error);
  }
});
export const getclients = createAsyncThunk("getclients", async () => {
    try {
      const res = await getRequestWithHeader("clients");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getclient = createAsyncThunk("getclient", async (id) => {
    try {
      const res = await getRequestWithHeader(`client/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updateclient = createAsyncThunk("updateclient", async (args) => {
    const {id,body} = args
    try {
      const res = await putRequestWithHeader(`clients/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addclient = createAsyncThunk("addclient", async (body) => {
    try {
      const res = await postRequestWithHeader(`clients`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deleteclient = createAsyncThunk("deleteclient",  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`clients/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    clients: [],
    client: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filterclients_lastname.fulfilled, (state, action) => {
      state.clients = action.payload;
    });
    builder.addCase(getclients.fulfilled, (state, action) => {
      state.clients = action.payload;
    });

    builder.addCase(getclient.fulfilled, (state, action) => {
      state.client = action.payload;
    });
    builder.addCase(updateclient.fulfilled, (state, action) => {
        state.clients = action.payload;
      });
      builder.addCase(addclient.fulfilled, (state, action) => {
        state.clients = [...state.clients,action.payload];
      });
      builder.addCase(deleteclient.fulfilled, (state, action) => {
        state.clients = action.payload;
      });
  },
});
export default clientSlice.reducer;

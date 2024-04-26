import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequestWithHeader,
  getRequestWithHeader,
  postRequestWithHeader,
  putRequestWithHeader,
} from "../helpers/axiosRequests";

export const filterreclamation_lastname = createAsyncThunk(
  "filterreclamations_lastname",
  async (str) => {
    try {
      const res = await getRequestWithHeader("reclamations");
    return res.data.filter((elem) => {
        return (
          elem.Client.first_name?.toUpperCase().includes(str.toUpperCase()) ||
          elem.Client.last_name?.toUpperCase().includes(str.toUpperCase()) ||
          elem.titel?.toUpperCase().includes(str.toUpperCase()) ||
          elem.description?.toUpperCase().includes(str.toUpperCase())
        );
      });
    
    } catch (error) {
      console.log(error);
    }
  }
);
export const getreclamations = createAsyncThunk("getreclamations", async () => {
  try {
    const res = await getRequestWithHeader("reclamations");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getreclamation = createAsyncThunk("getreclamation", async (id) => {
  try {
    const res = await getRequestWithHeader(`reclamation/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updatereclamation = createAsyncThunk(
  "updatereclamation",
  async (args) => {
    const { id, body } = args;
    try {
      const res = await putRequestWithHeader(`reclamations/${id}`, body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addreclamation = createAsyncThunk(
  "addreclamation",
  async (body) => {
    try {
      const res = await postRequestWithHeader(`reclamations`, body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deletereclamation = createAsyncThunk(
  "deletereclamation",
  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`reclamations/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const reclamationSlice = createSlice({
  name: "reclamation",
  initialState: {
    reclamations: [],
    reclamation: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getreclamations.fulfilled, (state, action) => {
      state.reclamations = action.payload;
    });

    builder.addCase(getreclamation.fulfilled, (state, action) => {
      state.reclamation = action.payload;
    });
    builder.addCase(updatereclamation.fulfilled, (state, action) => {
      state.reclamations = action.payload;
    });
    builder.addCase(addreclamation.fulfilled, (state, action) => {
      state.reclamations = action.payload;
    });
    builder.addCase(deletereclamation.fulfilled, (state, action) => {
      state.reclamations = action.payload;
    });
    builder.addCase(filterreclamation_lastname.fulfilled, (state, action) => {
      state.reclamations = action.payload;
    });
  },
});
export default reclamationSlice.reducer;

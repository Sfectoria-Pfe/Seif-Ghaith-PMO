import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequestWithHeader,
  getRequestWithHeader,
  postRequestWithHeader,
  putRequestWithHeader,
} from "../helpers/axiosRequests";

export const filteremployees_lastname = createAsyncThunk(
  "filteremployees_lastname",
  async (str) => {
    try {
      const res = await getRequestWithHeader("employees");
      return res.data.filter((elem) => {
        return (
          elem.first_name.toUpperCase().includes(str.toUpperCase()) ||
          elem.last_name.toUpperCase().includes(str.toUpperCase())
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const getemployees = createAsyncThunk("getemployees", async () => {
  try {
    const res = await getRequestWithHeader("employees");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getemployee = createAsyncThunk("getemployee", async (id) => {
  try {
    const res = await getRequestWithHeader(`employees/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateemployee = createAsyncThunk(
  "updateemployee",
  async (args, { dispatch }) => {
    const { id, body } = args;
    console.log(args, "args");
    const res = await putRequestWithHeader(`employees/${+id}`, body);
    console.log(res, "res from store");
    dispatch(getemployees());
  }
);

export const addemployee = createAsyncThunk("addemployee", async (body) => {
  try {
    const res = await postRequestWithHeader(`employees`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteemployee = createAsyncThunk(
  "deleteemployee",
  async (id, { dispatch }) => {
    const res = await deleteRequestWithHeader(`employees/${id}`);
    dispatch(getemployees());
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    employee: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filteremployees_lastname.fulfilled, (state, action) => {
      state.employees = action.payload;
    });

    builder.addCase(getemployees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });

    builder.addCase(getemployee.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    // builder.addCase(updateemployee.fulfilled, (state, action) => {
    //   state.employees = action.payload;
    // });
    builder.addCase(addemployee.fulfilled, (state, action) => {
      state.employees = [...state.employees, action.payload];
    });
    // builder.addCase(deleteemployee.fulfilled, (state, action) => {
    //   state.employees = action.payload;
    // });
  },
});
export default employeeSlice.reducer;

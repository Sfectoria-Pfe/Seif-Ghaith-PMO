import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequestWithHeader, getRequestWithHeader, postRequestWithHeader, putRequestWithHeader } from "../helpers/axiosRequests";

export const getfiche_intervention_details = createAsyncThunk("getfiche_intervention_details", async () => {
    try {
      const res = await getRequestWithHeader("ficheintervention-details");
      console.log(res.data,"ssdsdnsdj")
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getfiche_intervention_detail = createAsyncThunk("getfiche_intervention_detail", async (id) => {
    try {
      const res = await getRequestWithHeader(`ficheintervention-details/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updatefiche_intervention_detail = createAsyncThunk("updatefiche_intervention_detail", async (args) => {
    const {id,body} = args
    try {
      const res = await putRequestWithHeader(`ficheintervention-details/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addfiche_intervention_detail = createAsyncThunk("addfiche_intervention_detail", async (body) => {
    try {
      const res = await postRequestWithHeader(`ficheintervention-details`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deletefiche_intervention_detail = createAsyncThunk("deletefiche_intervention_detail",  async (id) => {
    try {
      const res = await deleteRequestWithHeader(`ficheintervention-details/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const fiche_intervention_detailSlice = createSlice({
  name: "fiche_intervention_detail",
  initialState: {
    fiche_intervention_details: [],
    fiche_intervention_detail: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getfiche_intervention_details.fulfilled, (state, action) => {
      state.fiche_intervention_details = action.payload;
    });

    builder.addCase(getfiche_intervention_detail.fulfilled, (state, action) => {
      state.fiche_intervention_detail = action.payload;
    });
    builder.addCase(updatefiche_intervention_detail.fulfilled, (state, action) => {
        state.fiche_intervention_details = action.payload;
      });
      builder.addCase(addfiche_intervention_detail.fulfilled, (state, action) => {
        state.fiche_intervention_details = action.payload;
      });
      builder.addCase(deletefiche_intervention_detail.fulfilled, (state, action) => {
        state.fiche_intervention_details = action.payload;
      });
  },
});
export default fiche_intervention_detailSlice.reducer;

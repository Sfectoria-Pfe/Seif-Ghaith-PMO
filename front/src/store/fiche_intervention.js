import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequestWithHeader, getRequestWithHeader, postRequestWithHeader, putRequestWithHeader } from "../helpers/axiosRequests";




// export const filterfiche_interventions_lastname = createAsyncThunk(
//   "filterfiche_interventions_lastname",
//   async (str) => {
//     try {
//       const res = await getRequestWithHeader("employees");
//       return res.data.filter((elem) => {
//         return (
//           elem.OrderReparation?.title.toUpperCase().includes(str.toUpperCase()) ||
//           elem.OrderReparation?.description.toUpperCase().includes(str.toUpperCase())
//         );
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const getfiche_interventions = createAsyncThunk("getfiche_interventions", async () => {
    try {
      const res = await getRequestWithHeader("fiche-interventions");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getfiche_intervention = createAsyncThunk("getfiche_intervention", async (id) => {
    try {
      const res = await getRequestWithHeader(`fiche-interventions/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updatefiche_intervention = createAsyncThunk("updatefiche_intervention", async (args,{dispatch}) => {
    const {id,body} = args
    try {
      const res = await putRequestWithHeader(`fiche-interventions/${id}`,body);
      dispatch(getfiche_interventions())
    } catch (error) {
      console.log(error);
    }
  });

  export const addfiche_intervention = createAsyncThunk("addfiche_intervention", async (body,dispatch) => {
    try {
      const res = await postRequestWithHeader(`fiche-interventions`,body);
      dispatch(getfiche_interventions())
    } catch (error) {
      console.log(error);
    }
  });
  export const deletefiche_intervention = createAsyncThunk("deletefiche_intervention",  async (id,{dispatch}) => {
    try {
      const res = await deleteRequestWithHeader(`fiche-interventions/${id}`);
      dispatch(getfiche_interventions())
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const fiche_interventionSlice = createSlice({
  name: "fiche_intervention",
  initialState: {
    fiche_interventions: [],
    fiche_intervention: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getfiche_interventions.fulfilled, (state, action) => {
      state.fiche_interventions = action.payload;
    });

    builder.addCase(getfiche_intervention.fulfilled, (state, action) => {
      state.fiche_intervention = action.payload;
    });
    // builder.addCase(updatefiche_intervention.fulfilled, (state, action) => {
    //     state.fiche_interventions = action.payload;
    //   });
      // builder.addCase(addfiche_intervention.fulfilled, (state, action) => {
      //   state.fiche_interventions = action.payload;
      // });
      // builder.addCase(deletefiche_intervention.fulfilled, (state, action) => {
      //   state.fiche_interventions = action.payload;
      // });
  },
});
export default fiche_interventionSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "./client";
import employeeSlice from "./empolyee";
import entree_deviceSlice from "./entree_device";
import etapeSlice from "./etape";
import order_lineSlice from "./order_line";
import orderSlice from "./order";
import userSlice from "./user";
import fiche_interventionsSlice from "./fiche_intervention";
import reclamationslice from "./reclamation";
import auth from "./auth";
import  uploadSlice  from "./upload";
import  orderreparationSlice  from "./order_reparation";

export const store = configureStore({
  reducer: {
    client: clientSlice,
    employee: employeeSlice,
    entree_device: entree_deviceSlice,
    etape: etapeSlice,
    fiche_intervention: fiche_interventionsSlice,
    order_line: order_lineSlice,
    order: orderSlice,
    reclamation: reclamationslice,
    user: userSlice,
    orderreparation:orderreparationSlice,
    upload : uploadSlice,
    auth,
  },
});

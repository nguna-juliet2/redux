import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Cart-slice";
configureStore({
    reducer:{Ui:UiSlice.reducer}
})
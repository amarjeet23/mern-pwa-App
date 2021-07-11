import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import ModalReducer from "../features/modal/modal";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: ModalReducer
  }
});

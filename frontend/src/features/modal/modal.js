import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showLoader :false
};
export const AlertModal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    hideModal: (state) => {
      state.showModal = false;
    },
    showLoader: (state) => {
        state.showLoader = true;
      },
      hideLoader: (state) => {
        state.showLoader = false;
      }
  }
});

export const { showModal, hideModal ,showLoader,hideLoader } = AlertModal.actions;
export const modalStatus = (state) => state.modal.showModal;
export const loaderStatus = (state) => state.modal.showLoader

export default AlertModal.reducer;

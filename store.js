import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "@/src/features/modal/modalSlice"

export const store = configureStore({
  reducer: {
    modal: modalReducer
  },
})
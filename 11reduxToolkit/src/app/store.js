import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"
// Created Store
export const store = configureStore({
  reducer: todoReducer,
})

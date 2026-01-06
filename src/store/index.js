import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import examsReducer from "./examsSlice";
import papersReducer from "./papersSlice";
import aiReducer from "./aiSlice";
import trackingReducer from "./trackingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    exams: examsReducer,
    papers: papersReducer,
    ai: aiReducer,
    tracking: trackingReducer,
  },
});

export default store;

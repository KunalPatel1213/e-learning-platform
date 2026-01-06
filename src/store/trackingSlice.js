import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActivity: [],
  analytics: {},
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    logActivity: (state, action) => {
      state.userActivity.push(action.payload);
    },
    setAnalytics: (state, action) => {
      state.analytics = action.payload;
    },
  },
});

export const { logActivity, setAnalytics } = trackingSlice.actions;
export default trackingSlice.reducer;

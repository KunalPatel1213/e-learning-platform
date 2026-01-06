import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aiResponses: [],
  loading: false,
  error: null,
};

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    setAIResponse: (state, action) => {
      state.aiResponses.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAIResponse, setLoading, setError } = aiSlice.actions;
export default aiSlice.reducer;

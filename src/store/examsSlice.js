import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exams: [],
  loading: false,
  error: null,
};

const examsSlice = createSlice({
  name: "exams",
  initialState,
  reducers: {
    setExams: (state, action) => {
      state.exams = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setExams, setLoading, setError } = examsSlice.actions;
export default examsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  papers: [],
  selectedPaper: null,
  loading: false,
  error: null,
};

const papersSlice = createSlice({
  name: "papers",
  initialState,
  reducers: {
    setPapers: (state, action) => {
      state.papers = action.payload;
    },
    setSelectedPaper: (state, action) => {
      state.selectedPaper = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPapers, setSelectedPaper, setLoading, setError } =
  papersSlice.actions;
export default papersSlice.reducer;

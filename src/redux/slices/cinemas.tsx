import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const entityAdapter = createEntityAdapter();

export const cinemasSlice = createSlice({
  name: 'cinemas',
  initialState: { items: [] },
  reducers: {
    setCinemas(state, action) {
      state.items = action.payload;
    },
    addCinemas(state, action) {
      state.items = [...state.items, ...action.payload];
    },
  },
});

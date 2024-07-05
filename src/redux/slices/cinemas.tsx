import { createSlice } from '@reduxjs/toolkit';

export const cinemasSlice = createSlice({
  name: 'cinemas',
  initialState: [],
  reducers: {
    setCinemas(state, cinema) {
      state = [...state, ...cinema.payload];
    },
  },
});

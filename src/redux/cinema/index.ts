import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getCinemas } from './thunks/get-cinemas';
// import { useGetCinemasQuery } from '../services/api';

const cinemaAdapter = createEntityAdapter();

export const cinemaSlice = createSlice({
  name: 'cinema',
  initialState: cinemaAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemas.fulfilled, (state, { payload }) => {
      cinemaAdapter.setAll(state, payload.data);
    });
  },
});

export const cinemaSelectors = cinemaAdapter.getSelectors(
  (state) => state.cinema
);

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getCinemas } from './thunks/get-cinemas';

const cinemaAdapter = createEntityAdapter();

export const cinemaSlice = createSlice({
  name: 'cinema',
  initialState: cinemaAdapter.getInitialState({
    loading: 'idle',
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemas.fulfilled, (state, { payload }) => {
      cinemaAdapter.setAll(state, payload.data);
      state.loading = 'fulfilled';
    });
    builder.addCase(getCinemas.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getCinemas.rejected, (state) => {
      state.loading = 'rejected';
    });
  },
  selectors: {
    getLoadingState: (state) => state.loading,
  },
});

export const cinemaSelectors = cinemaAdapter.getSelectors(
  (state) => state.cinema
);

export const { getLoadingState } = cinemaSlice.selectors;

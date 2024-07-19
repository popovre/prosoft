import { createSlice, Slice } from '@reduxjs/toolkit';

export const viewSlice: Slice = createSlice({
  name: 'view',
  initialState: {
    viewState: 'pagination',
  },
  reducers: {
    setViewPagination: (state) => {
      state.viewState = 'pagination';
    },
    setViewSinglePage: (state) => {
      state.viewState = 'singlePage';
    },
  },
  selectors: {
    getViewState: (state) => state.viewState,
  },
});

export const { setViewPagination, setViewSinglePage } = viewSlice.actions;
export const { getViewState } = viewSlice.selectors;

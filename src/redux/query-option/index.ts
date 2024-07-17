import { createSlice, Slice } from '@reduxjs/toolkit';

export const queryOptionSlice: Slice = createSlice({
  name: 'queryOption',
  initialState: {
    options: {
      sort: '',
      page: 0,
      page_size: 20,
      search: '',
      sort_order: 'asc',
    },
  },
  selectors: {
    selectOptions: (state) => state.options,
    selectOptionsSearch: (state) => state.options.search,
  },
  reducers: {
    setQuerySort(state, action) {
      state.options.sort = action.payload;
    },
    setQuerySearch(state, action) {
      state.options.search = action.payload;
    },
    setQueryStartPage(state, action) {
      state.options.page = action.payload;
    },
    setQueryPageAmount(state, action) {
      state.options.page_size = action.payload;
    },
    setQuerySortOrder(state, action) {
      state.options.sort_order = action.payload;
    },
  },
});

export const {
  setQuerySort,
  setQueryStartPage,
  setQueryPageAmount,
  setQuerySearch,
  setQuerySortOrder,
} = queryOptionSlice.actions;

export const { selectOptions, selectOptionsSearch } =
  queryOptionSlice.selectors;

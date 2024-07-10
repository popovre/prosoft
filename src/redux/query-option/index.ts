import { createSlice, Slice } from '@reduxjs/toolkit';

export const queryOptionSlice: Slice = createSlice({
  name: 'queryOption',
  initialState: {
    options: {
      sort: '',
      page: 0,
      page_size: undefined,
      search: '',
      sort_order: 'asc',
    },
  },
  selectors: {
    selectOptions: (state) => state.options,
  },
  reducers: {
    setQuerySort(state, sort) {
      state.options.sort = sort.payload;
    },
    setQuerySearch(state, search) {
      state.options.search = search.payload;
    },
    setQueryStartPage(state, startPage) {
      state.options.page = startPage.payload;
    },
    setQueryPageAmount(state, pageAmount) {
      state.options.page_size = pageAmount.payload;
    },
    setQuerySortOrder(state, sortOrder) {
      state.options.sort_order = sortOrder.payload;
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

export const { selectOptions } = queryOptionSlice.selectors;

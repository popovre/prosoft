import { createSlice, Slice } from '@reduxjs/toolkit';

export const queryOptionSlice: Slice = createSlice({
  name: 'queryOption',
  initialState: {
    options: {
      sort: '',
      page: 0,
      page_size: 20,
      search: '',
      sort_order: 'desc',
      sort_field: undefined,
    },
  },
  selectors: {
    selectOptions: (state) => state.options,
    selectOptionsSearch: (state) => state.options.search,
  },
  reducers: {
    setQuerySort(state, action) {
      state.options.sort = action.payload.sort;
      state.options.page_size = action.payload.pageSize;
    },
    setQuerySearch(state, action) {
      state.options.search = action.payload.search;
      state.options.page_size = action.payload.pageSize;
    },
    setQueryStartPage(state, action) {
      state.options.page = action.payload.startPage;
      state.options.page_size = action.payload.pageSize;
    },
    setQueryPageSize(state, action) {
      state.options.page_size = action.payload.pageSize;
    },
    setQuerySortOrder(state, action) {
      state.options.sort_order = action.payload.sortOrder;
      state.options.page_size = action.payload.pageSize;
    },
  },
});

export const {
  setQuerySort,
  setQueryStartPage,
  setQueryPageSize,
  setQuerySearch,
  setQuerySortOrder,
} = queryOptionSlice.actions;

export const { selectOptions, selectOptionsSearch } =
  queryOptionSlice.selectors;

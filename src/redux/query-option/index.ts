import { createSlice } from '@reduxjs/toolkit';

export const queryOptionSlice = createSlice({
  name: 'queryOption',
  initialState: {
    options: { sort: '', page: 0, page_size: undefined, search: '' },
  },
  selectors: {
    selectOptions: (state) => state.options,
  },
  reducers: {
    setSort(state, sort) {
      state.options.sort = sort.payload;
    },
    setSearch(state, search) {
      state.options.search = search.payload;
    },
    setStartPage(state, startPage) {
      state.options.page = startPage.payload;
    },
    setPageAmount(state, pageAmount) {
      state.options.page_size = pageAmount.payload;
    },
  },
});

export const { setSort, setStartPage, setPageAmount, setSearch } =
  queryOptionSlice.actions;

export const { selectOptions } = queryOptionSlice.selectors;

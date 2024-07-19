import { createSlice, Slice } from '@reduxjs/toolkit';

export const sortSlice: Slice = createSlice({
  name: 'sort',
  initialState: {
    currentSort: {
      keyToSort: 'imdb_id',
      direction: 'asc',
    },
  },
  selectors: {
    selectSort: (sliceState) => sliceState.currentSort,
  },
  reducers: {
    setSort: (state, action) => {
      state.currentSort = {
        ...state.currentSort,
        ...action.payload,
      };
    },
  },
});

export const { setSort } = sortSlice.actions;

export const { selectSort } = sortSlice.selectors;

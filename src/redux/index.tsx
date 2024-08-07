import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import { cinemaSlice } from './cinema/index';
import { requestSlice } from './ui/request/index';
import { queryOptionSlice } from './query-option';
import { sortSlice } from './sort';
import { viewSlice } from './view';
export const store = configureStore({
  reducer: combineSlices(
    api,
    cinemaSlice,
    requestSlice,
    queryOptionSlice,
    sortSlice,
    viewSlice
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

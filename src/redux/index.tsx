import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import { amountCinemasSlice } from './slices/amount';
import { cinemasSlice } from './slices/cinemas';

export const store = configureStore({
  reducer: combineSlices(api, amountCinemasSlice, cinemasSlice),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

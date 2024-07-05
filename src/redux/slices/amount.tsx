import { createSlice } from '@reduxjs/toolkit';

export const amountCinemasSlice = createSlice({
  name: 'amount',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    setAmount(state, { payload: amount }) {
      state.value = amount;
    },
  },
});

export const { increment, decrement, setAmount } = amountCinemasSlice.actions;

import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

export const getCinemas: AsyncThunk<ReturnType, Parameters, AsyncThunkConfig> =
  createAsyncThunk('/api/getCinemas', async (body) => {
    const response = await fetch(`http://185.185.69.80:8082/list`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
    });
    return await response.json();
  });

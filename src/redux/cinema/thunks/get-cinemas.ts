import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCinemas = createAsyncThunk('/api/getCinemas', async (body) => {
  const response = await fetch(`http://185.185.69.80:8082/list`, {
    url: 'list',
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
  return await response.json();
});

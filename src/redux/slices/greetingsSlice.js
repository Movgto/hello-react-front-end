import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import GREETINGS_URL from '../../database_urls/urls';

const initialState = {
  randomGreeting: '',
};

const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async (empty, { rejectWithValue }) => {
  try {
    const req = await axios.get(GREETINGS_URL);
    const res = req.data;
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.fulfilled, (state, { payload }) => {
        state.randomGreeting = payload;
      })
      .addCase(fetchGreetings.rejected, (state, { payload }) => {
        state.randomGreeting = payload;
      });
  },
});

export default greetingsSlice.reducer;

export { fetchGreetings };

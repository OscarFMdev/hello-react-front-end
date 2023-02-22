import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', () => axios.get('http://127.0.0.1:3000/api/v1/random-greeting')
  .then((response) => response.data));

const initialState = {
  message: [],
  status: 'idle',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        message: action.payload,
      }));
  },
});

export const { greetingReducer } = greetingSlice.actions;

export default greetingSlice.reducer;

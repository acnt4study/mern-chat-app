import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
//import type { PayloadAction } from '@reduxjs/toolkit';

export interface messagesState {
  messages: {
    msg: string;
  }[];
  isLoading: boolean;
}

const initialState: messagesState = {
  messages: [],
  isLoading: false,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    resetMessgaes: (state) => {
      state = initialState;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        toast.error(action.error.message);
        state.isLoading = false;
      });
  },
});

export const fetchMessages = createAsyncThunk(
  'msgView/fetchMessages',
  async (arg, { getState }) => {
    const {
      people: { selected },
    } = getState();
    const res = await fetch(`/api/message/${selected}`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data;
  },
);

export const { resetMessgaes, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;

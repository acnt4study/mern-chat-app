import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
//import type { PayloadAction } from '@reduxjs/toolkit';

export interface peopleState {
  people: {
    name: string;
    pic: string;
  }[];
  isLoading: boolean;
  selected: string;
  selectedPic: string;
}

const initialState: peopleState = {
  people: [],
  isLoading: false,
  selected: '',
  selectedPic: '',
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    selectPerson: (state, action) => {
      state.selected = action.payload.id;
      state.selectedPic = action.payload.pic;
    },
    resetPeople: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.people = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        toast.error(action.error.message);
        state.isLoading = false;
      });
  },
});

export const fetchPeople = createAsyncThunk('sidebar/fetchPeople', async () => {
  const res = await fetch('/api/users', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
});

export const { selectPerson, resetPeople } = peopleSlice.actions;

export default peopleSlice.reducer;

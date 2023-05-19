// slice.js

import { createSlice } from '@reduxjs/toolkit';

const sortOptionsEnum = {
  OLDEST: 'oldest',
  NEWEST: 'newest',
  RANDOM: 'random',
};

const initialState = {
  sortBy: sortOptionsEnum.OLDEST,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortSlice.actions;

export const selectSortBy = (state) => state.sort.sortBy;

export const sortOptions = sortOptionsEnum;

export default sortSlice.reducer;

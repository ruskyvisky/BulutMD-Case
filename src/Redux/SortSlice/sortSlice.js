import { createSlice } from '@reduxjs/toolkit';


 export const  sortOptionsEnum = {
  OLDEST: 'oldest',
  NEWEST: 'newest',
  RANDOM: 'random',
  NORMAL: 'normal',
};

const initialState = {
  sortBy: sortOptionsEnum.NORMAL,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetSortBy: (state) => {
      state.sortBy = sortOptionsEnum.NORMAL;
    },
  },
});

export const { setSortBy, resetSortBy } = sortSlice.actions;

export const selectSortBy = (state) => state.sort.sortBy;

export const sortOptions = sortOptionsEnum;

export default sortSlice.reducer;
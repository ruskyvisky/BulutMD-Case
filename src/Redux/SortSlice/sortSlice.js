import { createSlice } from '@reduxjs/toolkit';

// Sort options ENUM 
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
    setSortBy: (state, action) => { // action.payload is the value of the sort option
      state.sortBy = action.payload;
    },
    resetSortBy: (state) => { // reset the sort option to the default value
      state.sortBy = sortOptionsEnum.NORMAL;
    },
  },
});

export const { setSortBy, resetSortBy } = sortSlice.actions;

export const selectSortBy = (state) => state.sort.sortBy;

export const sortOptions = sortOptionsEnum;

export default sortSlice.reducer;
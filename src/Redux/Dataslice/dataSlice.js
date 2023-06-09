import { createSlice } from '@reduxjs/toolkit';
import dataList from '../../Utils/data.json';

const initialState = {dataList};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export const listData = (state) => state.data.dataList.entries; // returns the list of films and series

export default dataSlice.reducer;
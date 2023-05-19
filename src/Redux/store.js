import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './DataSlice/dataSlice'
import sortSlice from './SortSlice/sortSlice'
export const store = configureStore({
  reducer: {
    data: dataSlice,
    sort : sortSlice
  },
})
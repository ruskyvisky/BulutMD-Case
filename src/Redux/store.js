import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './Dataslice/dataSlice'

export const store = configureStore({
  reducer: {
    data: dataSlice,

  },
})
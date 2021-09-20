import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counter-slice'

import { apiSlice } from '../features/dogs/dogs-slice-api'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
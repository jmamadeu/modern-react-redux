// DUCKS Pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
     // it's ok to do this because immer makes it immutable
     //under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    }
  }
})

export const { incremented } = counterSlice.actions
export const { amountAdded } = counterSlice.actions

export default counterSlice.reducer

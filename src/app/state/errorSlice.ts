import { createSlice } from '@reduxjs/toolkit'

const initialState = { error: null }

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, { payload }) {
      const { error } = payload
      state.error = error
    },
    clearError(state) {
      state.error = null
    },
  },
})

export const { setError, clearError } = errorSlice.actions

export default errorSlice.reducer

import { combineReducers } from '@reduxjs/toolkit'

import error from '../app/state/errorSlice'

const rootReducer = combineReducers({
  error,
})

export default rootReducer

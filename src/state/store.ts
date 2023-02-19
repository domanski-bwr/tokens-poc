import { configureStore } from '@reduxjs/toolkit'

import { createEpicMiddleware } from 'redux-observable'

import rootReducer from './rootReducer'

import rootEpic from './rootEpic'

import { restHelper } from '@bwr/rest-helper'

const epicMiddleware = createEpicMiddleware({
  dependencies: { restHelper }
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
})

epicMiddleware.run(rootEpic)

export default store

export type RootState = ReturnType<typeof store.getState>

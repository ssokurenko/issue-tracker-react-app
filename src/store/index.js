import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { issuesSlice } from './slices/issues'

const preloadedState = localStorage.getItem('issuesState')
  ? JSON.parse(localStorage.getItem('issuesState'))
  : {}

const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer
  },
  middleware: [...getDefaultMiddleware()],
  preloadedState
})

store.subscribe(() => {
  localStorage.setItem('issuesState', JSON.stringify(store.getState()))
})

export default store

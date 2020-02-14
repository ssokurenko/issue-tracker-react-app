import { createSlice } from '@reduxjs/toolkit'
import uuid from 'uuid'
import config from '../../config'

export const issuesSlice = createSlice({
  name: 'issues',
  initialState: [],
  reducers: {
    addIssue: (state, action) => {
      const newIssue = {
        id: uuid.v4(),
        desc: action.payload.desc,
        status: config.issueStatuses[0],
        createdAt: new Date().toISOString()
      }
      state = state.push(newIssue)
    },
    clearAll: state => (state = [])
  }
})

export const { actions } = issuesSlice

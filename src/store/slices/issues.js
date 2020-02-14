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
    clearAll: state => (state = []),
    changeIssueStatus: (state, action) => {
      const newState = state.forEach(issue => {
        if (issue.id === action.payload.issueId) {
          issue.status = action.payload.newStatus
        }
      })
      state = newState
    },
    deleteIssue: (state, action) => {
      const newState = state.filter(
        issue => issue.id !== action.payload.issueId
      )
      state = newState
    }
  }
})

export const { actions } = issuesSlice

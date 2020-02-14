import React from 'react'
import { Select, Button, Icon } from 'antd'
import config from '../config'
import { useDispatch } from 'react-redux'
import { issuesSlice } from '../store/slices/issues'

const { Option } = Select

const { issueStatuses } = config
const IssueList = ({ issues, status }) => {
  const dispatch = useDispatch()
  const handleOptionClick = (issueId, newStatus) => {
    dispatch(issuesSlice.actions.changeIssueStatus({ issueId, newStatus }))
  }
  const handleDeleteClick = issueId => {
    dispatch(issuesSlice.actions.changeIssueStatus({ issueId }))
  }
  return (
    <div>
      <h4>{status}</h4>
      {issues
        .filter(issue => issue.status === status)
        .map(issue => (
          <div key={issue.id} className="lin-card has-space-bottom">
            <h4>{issue.desc}</h4>
            <h6>{issue.createdAt}</h6>
            <Select value={issue.status} className="full-width">
              {issueStatuses.map(status => (
                <Option
                  value={status}
                  key={status}
                  onClick={() => handleOptionClick(issue.id, status)}>
                  {status}
                </Option>
              ))}
            </Select>
            <div>
              <Button type="danger" onClick={() => handleDeleteClick(issue.id)}>
                <Icon type="delete"></Icon>
              </Button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default IssueList

import React from 'react'
import { Card } from 'antd'

const IssueList = ({ issues, status }) => {
  const columnStyles = {
    background: '#f6f6f6',
    padding: '.5rem'
  }
  const cardStyles = {
    marginBottom: '.5rem'
  }

  return (
    <div style={columnStyles}>
      <h3>{status}</h3>
      {issues
        .filter(issue => issue.status === status)
        .map(issue => (
          <Card style={cardStyles} key={issue.id}>
            <div>
              <strong>{issue.desc}</strong>
            </div>
            <div>
              {issue.createdAt.toLocaleDateString()}{' '}
              {issue.createdAt.toLocaleTimeString()}
            </div>
          </Card>
        ))}
    </div>
  )
}

export default IssueList

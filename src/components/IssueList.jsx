import React from 'react'

const IssueList = ({ issues, status }) => {
  return (
    <div>
      <h4>{status}</h4>
      {issues
        .filter(issue => issue.status === status)
        .map(issue => (
          <div key={issue.id} className="lin-card has-space-bottom">
            <h4>{issue.desc}</h4>
            <h6>{issue.createdAt}</h6>
          </div>
        ))}
    </div>
  )
}

export default IssueList

import React, { useState } from 'react'
import { Layout } from 'antd'
import uuid from 'uuid'
import config from './config'
import AppLogo from './components/AppLogo'
import AddIssue from './components/AddIssue'
import IssueList from './components/IssueList'

const { Header, Content } = Layout

const App = () => {
  const { appName, issueStatuses } = config
  const [issues, setIssues] = useState([])

  const addIssue = desc => {
    const newIssue = {
      id: uuid.v4(),
      desc,
      status: issueStatuses[0],
      createdAt: new Date()
    }
    setIssues([...issues, newIssue])
  }

  return (
    <div>
      <Layout>
        <Header>
          <AppLogo appName={appName} />
        </Header>
        <Content>
          <div className="container">
            <div className="row">
              <div className="col-12 has-space-top">
                <div className="lin-card">
                  <AddIssue onAddIssue={addIssue} />
                </div>
              </div>
              {issueStatuses.map(status => (
                <div className="col-3 has-space-top" key={status}>
                  <IssueList issues={issues} status={status} />
                </div>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default App

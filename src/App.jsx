import React from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'
import config from './config'
import AppLogo from './components/AppLogo'
import AddIssue from './components/AddIssue'
import IssueList from './components/IssueList'

const { Header, Content } = Layout

const App = () => {
  const { appName, issueStatuses } = config
  const issues = useSelector(state => state.issues)

  return (
    <div>
      <Layout>
        <Header>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <AppLogo appName={appName} />
              </div>
            </div>
          </div>
        </Header>
        <Content>
          <div className="container">
            <div className="row">
              <div className="col-12 has-space-top">
                <div className="lin-card">
                  <AddIssue />
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

import React, { useState } from 'react'
import { Layout, Row, Col } from 'antd'
import uuid from 'uuid'
import config from './config'
import AppLogo from './components/AppLogo'
import AddIssue from './components/AddIssue'
import IssueList from './components/IssueList'

const { Header, Content } = Layout

const App = () => {
  const { appName, issueStates } = config
  const [issues, setIssues] = useState([])

  const addIssue = desc => {
    const newIssue = {
      id: uuid.v4(),
      desc,
      state: issueStates[0],
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
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <AddIssue onAddIssue={addIssue} />
            </Col>
            {issueStates.map(state => (
              <Col span={6} key={state}>
                <IssueList issues={issues} state={state} />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default App

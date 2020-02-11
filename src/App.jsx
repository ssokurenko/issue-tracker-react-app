import React from 'react'
import { Layout, Row, Col } from 'antd'
import config from './config'
import AppLogo from './components/AppLogo'

const { Header, Content } = Layout

const App = () => {
  const { appName } = config
  return (
    <div>
      <Layout>
        <Header>
          <AppLogo appName={appName} />
        </Header>
        <Content>
          <Row>
            <Col span={12}>Content</Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default App

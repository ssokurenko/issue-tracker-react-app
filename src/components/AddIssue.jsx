import React, { useState } from 'react'
import { Row, Col, Input, Button } from 'antd'

const AddIssue = ({ onAddIssue }) => {
  const defaultValue = ''
  const [desc, setDesc] = useState(defaultValue)
  const handleAddClick = () => {
    if (desc && desc.length) {
      onAddIssue(desc)
      setDesc(defaultValue)
    }
  }
  return (
    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Input
          onChange={e => setDesc(e.target.value)}
          placeholder="Type new issue description"
          value={desc}
        />
      </Col>
      <Col span={4}>
        <Button onClick={handleAddClick} type="primary">
          Add
        </Button>
      </Col>
    </Row>
  )
}

export default AddIssue

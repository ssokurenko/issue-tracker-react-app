import React, { useState } from 'react'
import { Input, Button } from 'antd'

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
    <div className="row">
      <div className="col-10">
        <Input
          onChange={e => setDesc(e.target.value)}
          placeholder="Type new issue description"
          value={desc}
        />
      </div>
      <div className="col-2">
        <Button onClick={handleAddClick} type="primary">
          Add
        </Button>
      </div>
    </div>
  )
}

export default AddIssue

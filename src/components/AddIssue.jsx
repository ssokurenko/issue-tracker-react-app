import React, { useState } from 'react'
import { Input, Button } from 'antd'

import { useDispatch } from 'react-redux'
import { issuesSlice } from '../store/slices/issues'

const AddIssue = () => {
  const dispatch = useDispatch()
  const defaultValue = ''
  const [desc, setDesc] = useState(defaultValue)
  const handleAddClick = () => {
    if (desc && desc.length) {
      dispatch(issuesSlice.actions.addIssue({ desc }))
      setDesc(defaultValue)
    }
  }

  const handleClearAllClick = () => {
    dispatch(issuesSlice.actions.clearAll())
  }
  return (
    <div className="row">
      <div className="col-8">
        <Input
          onChange={e => setDesc(e.target.value)}
          placeholder="Type new issue description"
          value={desc}
        />
      </div>
      <div className="col-4">
        <Button onClick={handleAddClick} type="primary">
          Add
        </Button>
        &nbsp;
        <Button onClick={handleClearAllClick} type="primary">
          Clear All
        </Button>
      </div>
    </div>
  )
}

export default AddIssue

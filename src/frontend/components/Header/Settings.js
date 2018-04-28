// @flow
import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <Link to="/settings">
      <Button square>
        <i className="fa fa-cog" />
      </Button>
    </Link>
  )
}

export default Settings

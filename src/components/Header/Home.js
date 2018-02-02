// @flow
import React from 'react'
import Tooltip from '../Tooltip'
import Button from './Button'

type Props = {
  goHome: Function
}

const Home = (props: Props) => {
  const { goHome } = props

  return (
    <Tooltip placement="right" content="Home">
      <Button square onClick={goHome}>
        <i className="fa fa-home" />
      </Button>
    </Tooltip>
  )
}

export default Home

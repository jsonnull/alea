// @flow
import React from 'react'
import Button from './Button'

type Props = {
  goHome: Function
}

const Home = (props: Props) => {
  const { goHome } = props

  return (
    <Button square onClick={goHome}>
      <i className="fa fa-home" />
    </Button>
  )
}

export default Home

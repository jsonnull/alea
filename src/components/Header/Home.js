/* @flow */
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { fonts, fontSize } from 'styles/common'

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

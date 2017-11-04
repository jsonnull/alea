/* @flow */
import React from 'react'
import styled from 'styled-components'
import { fonts } from 'styles/common'

const Button = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  line-height: 4.8rem;
  padding: 0 1.85rem;
  font-family: ${fonts.header};
`

type Props = {
  goHome: Function
}

const Home = (props: Props) => {
  const { goHome } = props

  return <Button onClick={goHome}>Aleamancer</Button>
}

export default Home

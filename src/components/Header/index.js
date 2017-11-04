/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/common'
import Home from './Home'
import CurrentUser from './CurrentUser'
import Settings from './Settings'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.8rem;
  line-height: 4.8rem;
  color: white;
  background-color: ${colors.blue};
`

type Props = {
  username: string,
  goHome: Function,
  showSettings: Function
}

const Header = (props: Props) => {
  const { username, goHome, showSettings } = props

  return (
    <Container>
      <Home goHome={goHome} />
      <CurrentUser username={username} />
      <Settings showSettings={showSettings} />
    </Container>
  )
}

export default Header

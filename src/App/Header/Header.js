/* @flow */
import React from 'react'
import styled from 'styled-components'
import * as colors from 'styles/colors'
import Home from './Home'
import CurrentUser from './CurrentUser'
import Settings from './Settings'

const Header = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 4.8rem;
    line-height: 4.8rem;
    color: white;
    background-color: ${colors.blue};
  `

  return (
    <Container>
      <Home />
      <CurrentUser />
      <Settings />
    </Container>
  )
}

export default Header

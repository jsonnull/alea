/* @flow */
import React from 'react'
import styled from 'styled-components'
import { RedButton } from 'components/Button'

type Props = {
  logout: Function
}

const Container = styled.div`
  margin-top: 2.4rem;
  display: flex;
`

const Logout = (props: Props) => {
  return <Container>
    <RedButton onClick={props.logout}>
      Logout
    </RedButton>
  </Container>
}

export default Logout

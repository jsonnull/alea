// @flow
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fonts, fontSize } from 'styles/common'
import Create from './Create'
import List from './List'
import type { SessionInfo } from 'types'

type Props = {
  sessions: Array<SessionInfo>,
  switchToSession: Function
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${props => props.theme.background};
  padding: 0 2rem;
`

const Heading = styled.h1`
  font-size: ${fontSize.large};
  line-height: 1;
  font-family: ${fonts.heading};
  padding: 1rem 0;
  color: ${props => props.theme.color};
  margin: 0;
`

class Sessions extends React.Component<Props> {
  // FIXME: Firebase
  // createSession = () => this.props.firebase.createSession()
  createSession = () => {}

  render() {
    const { sessions, switchToSession } = this.props
    return (
      <Container>
        <Body>
          <Heading>Your Games</Heading>
          <List sessions={sessions} setSession={switchToSession} />
          <Create createSession={this.createSession} />
        </Body>
      </Container>
    )
  }
}

export default Sessions

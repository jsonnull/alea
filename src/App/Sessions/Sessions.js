/* @flow */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { switchToSession } from 'actions'
import { header } from 'styles/fonts'
// import Header from 'App/components/Header'
import Create from './Create'
import List from './List'
import type { State } from 'store'
import type { SessionList, SessionInfo } from 'types'

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
  padding: 0 1.8rem;
`

const Heading = styled.h1`
  font-size: 2.4rem;
  line-height: 4.8rem;
  font-family: ${header};
  padding: 1.2rem 0;
  color: ${props => props.theme.color};
  line-height: 2.4rem;
  margin: 0;
`

class Sessions extends React.Component<Props> {
  // FIXME: Firebase
  // createSession = () => this.props.firebase.createSession()
  createSession = () => {}

  setSession = (sessionId: string) => {
    this.props.switchToSession(sessionId)
  }

  render() {
    return (
      <Container>
        <Body>
          <Heading>Your Games</Heading>
          <List sessions={this.props.sessions} setSession={this.setSession} />
          <Create createSession={this.createSession} />
        </Body>
      </Container>
    )
  }
}

/*
 * Current way to type Object.values requires typecast to desired type through any
 * See https://github.com/facebook/flow/issues/2174
 * FIXME
 */
function sessionListToArray(sessions: SessionList): Array<SessionInfo> {
  let arr: any = Object.values(sessions)
  arr = (arr: Array<SessionInfo>)
  return arr
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign(
    {
      sessions: sessionListToArray(state.user.data.userSessions)
    },
    ownProps
  )
}

const mapDispatchToProps = (dispatch: Function) => ({
  switchToSession: (sessionId: string) => dispatch(switchToSession(sessionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sessions)

/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { Firebase, firebaseInject } from 'backend'
import { goToSession } from 'actions'
import Header from '../Header'
import Create from './Create'
import List from './List'
import type { State } from 'store'
import type { SessionList, SessionInfo } from 'types'
import sidebarStyles from '../style.css'

type Props = {
  sessions: Array<SessionInfo>,
  goToSession: Function,
  firebase: Firebase
}

class Sessions extends React.Component<*, Props, *> {
  props: Props

  createSession = () => this.props.firebase.createSession()

  // FIXME: Clean up setUserSession from firebase
  // setSession = sessionId => this.props.firebase.setUserSession(sessionId)

  setSession = (sessionId: string) => {
    const { goToSession, sessions } = this.props
    const session = sessions.find(el => el.sessionId === sessionId)
    if (session) {
      const meta = session.meta
      if (meta) {
        const sessionName = meta.name
        goToSession(sessionId, sessionName)
      }
    }
  }

  render () {
    return (
      <div className={ sidebarStyles.inner }>
        <Header>Your Games</Header>
        <List
          sessions={this.props.sessions}
          setSession={this.setSession}
          />
        <Create createSession={this.createSession}/>
      </div>
    )
  }
}

/*
 * Current way to type Object.values requires typecast to desired type through any
 * See https://github.com/facebook/flow/issues/2174
 * FIXME
 */
function sessionListToArray (sessions: SessionList): Array<SessionInfo> {
  let arr: any = Object.values(sessions)
  arr = (arr: Array<SessionInfo>)
  return arr
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign({
    sessions: sessionListToArray(state.user.data.userSessions)
  }, ownProps)
}

const mapDispatchToProps = (dispatch: Function) => ({
  goToSession: (sessionId: string, sessionName: string) => dispatch(goToSession(sessionId, sessionName))
})

export default connect(mapStateToProps, mapDispatchToProps)(firebaseInject(Sessions))

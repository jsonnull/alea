/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { switchToSession } from 'actions'
// import Header from 'App/components/Header'
import Create from './Create'
import List from './List'
import type { State } from 'store'
import type { SessionList, SessionInfo } from 'types'
import styles from './style.css'

type Props = {
  sessions: Array<SessionInfo>,
  switchToSession: Function
}

class Sessions extends React.Component<*, Props, *> {
  props: Props

  // FIXME: Firebase
  // createSession = () => this.props.firebase.createSession()
  createSession = () => {}

  setSession = (sessionId: string) => {
    this.props.switchToSession(sessionId)
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h1 className={styles.heading}>Your Games</h1>
          <List
            sessions={this.props.sessions}
            setSession={this.setSession}
            />
          <Create createSession={this.createSession}/>
        </div>
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
  switchToSession: (sessionId: string) => dispatch(switchToSession(sessionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sessions)

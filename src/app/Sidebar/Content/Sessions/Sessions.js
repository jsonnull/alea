/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { Firebase, firebaseInject } from 'backend'
import Header from '../Header'
import Create from './Create'
import List from './List'
import type { State } from 'store'
import sidebarStyles from '../style.css'
import styles from './style.css'

type Props = {
  sessions: Array<Object>,
  currentSession: string,
  firebase: Firebase
}

class Sessions extends React.Component {
  props: Props

  createSession = () => this.props.firebase.createSession()

  setSession = sessionId => this.props.firebase.setUserSession(sessionId)

  render () {
    return (
      <div className={ sidebarStyles.inner }>
        <Header>Your Games</Header>
        <List
          sessions={this.props.sessions}
          currentSession={this.props.currentSession}
          setSession={this.setSession}
          />
        <Create createSession={this.createSession}/>
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign({
    currentSession: state.user.data.currentSession,
    sessions: state.user.data.sessions
  }, ownProps)
}

export default connect(mapStateToProps)(firebaseInject(Sessions))

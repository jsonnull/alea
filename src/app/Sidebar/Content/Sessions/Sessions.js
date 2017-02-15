/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import Create from './Create'
import List from './List'
import {
  createSession,
  setUserSession
} from 'actions'
import sidebarStyles from '../style.css'
import styles from './style.css'

type Props = {
  sessions: Array<Object>,
  currentSession: string,
  createSession: Function,
  setSession: Function
}

class Sessions extends React.Component {
  props: Props

  render () {
    return (
      <div className={ sidebarStyles.inner }>
        <Header>Your Games</Header>
        <List
          sessions={this.props.sessions}
          currentSession={this.props.currentSession}
          setSession={this.props.setSession}
          />
        <Create createSession={this.props.createSession}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    currentSession: state.user.data.currentSession,
    sessions: state.user.data.sessions
  }, ownProps)
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    createSession: () => dispatch(createSession()),
    setSession: sessionId => dispatch(setUserSession(sessionId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions)

/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import SessionCreator from './SessionCreator'
import SessionList from './SessionList'
import {
  createSession,
  setUserSession
} from 'actions'
import sidebarStyles from '../style.css'
import styles from './style.css'

type Props = {
  sessions: Array<Object>,
  createSession: Function,
  setSession: Function
}

class Switcher extends React.Component {
  props: Props

  render () {
    return (
      <div className={ sidebarStyles.container }>
        <Header>Your Games</Header>

        <SessionList sessions={this.props.sessions} setSession={this.props.setSession} />

        <SessionCreator
          createSession={this.props.createSession}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Switcher)

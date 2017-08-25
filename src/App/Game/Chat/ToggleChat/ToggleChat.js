/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  pinned: boolean,
  togglePinned: Function
}

class ChatPin extends React.Component<*, Props, *> {
  render () {
    const { pinned, togglePinned } = this.props

    let toggleChat = (pinned)
      ? <i className='fa fa-chevron-right'></i>
      : <i className='fa fa-chevron-left'></i>

    return (
      <div
        className={styles.toggle}
        onClick={togglePinned}
      >
        { toggleChat }
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => ({
  pinned: state.user.preferences.chatPinned
})

const mapDispatchToProps = (dispatch: Function) => ({
  togglePinned: () => dispatch({ type: 'TOGGLE_CHAT_PIN' })
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPin)

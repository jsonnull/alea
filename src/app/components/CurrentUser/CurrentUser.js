/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import ChatPin from './ChatPin'
import styles from './style.css'

type Props = {
  chatPinned: boolean,
  showSettings: Function,
  toggleChatPin: Function
}

class CurrentUser extends React.Component<*, Props, *> {
  render () {
    const { chatPinned, showSettings, toggleChatPin } = this.props

    return (
      <div className={styles.user}>
        <ChatPin pinned={chatPinned} togglePinned={toggleChatPin} />
        <div className={styles.settings} onClick={showSettings}>
          <i className={`fa fa-cog`}></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => ({
  chatPinned: state.user.preferences.chatPinned
})

const mapDispatchToProps = (dispatch: Function) => ({
  showSettings: () => dispatch({ type: 'SHOW_SETTINGS' }),
  toggleChatPin: () => dispatch({ type: 'TOGGLE_CHAT_PIN' })
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser)

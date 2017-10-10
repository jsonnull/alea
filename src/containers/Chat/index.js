/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Chat from '../../components/Chat'
import { sendMessage } from 'actions'
import type { Message, ThemeName } from 'types'
import type { State } from 'store'

type StateProps = {
  messages: Array<Message>,
  pinned: boolean
}
const mapStateToProps = (state: State): StateProps => ({
  messages: state.messages,
  pinned: state.user.preferences.chatPinned
})

type DispatchProps = {
  sendMessage: string => void
}
const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  sendMessage: (text: string) => dispatch(sendMessage(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

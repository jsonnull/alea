/* @flow */
import React from 'react'
import Controls from '../../components/Chat/Controls'
import { connect } from 'react-redux'
import type { State } from 'store'

type StateProps = { pinned: boolean }
const mapStateToProps = (state: State, ownProps): StateProps => ({
  pinned: state.user.preferences.chatPinned
})

type DispatchProps = { togglePinned: () => {} }
const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  togglePinned: () => dispatch({ type: 'TOGGLE_CHAT_PIN' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

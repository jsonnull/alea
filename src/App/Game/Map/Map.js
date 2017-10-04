/* @flow */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import {
// sendMessage,
// toggleChatPin
// } from '../../actions'
import type { State } from 'store'

const Container = styled.div`
  background-color: ${props => props.theme.map};
  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 4.8rem;
  left: 0;
  right: 0;
  bottom: 0;
`

class Map extends React.Component {
  render() {
    const { sidebar, chat } = this.props

    let style = {
      right: chat ? '300px' : '0',
      left: sidebar ? '300px' : '0'
    }

    return <Container style={style} />
  }
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign(
    {
      sidebar: state.sidebar.open,
      chat: state.user.preferences.chatPinned
    },
    ownProps
  )
}

// const mapDispatchToProps = (dispatch) => {
// return {
// sendMessage: (message) => { dispatch(sendMessage(message)) },
// togglePinned: () => dispatch(toggleChatPin())
// }
// }

export default connect(mapStateToProps)(Map)

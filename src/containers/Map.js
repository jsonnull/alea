// @flow
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Map from '../components/Map'
import type { State } from 'store'

type Props = {
  sidebar: boolean,
  chat: boolean
}
const mapStateToProps = (state: State): Props => ({
  sidebar: state.sidebar.open,
  chat: state.user.preferences.chatPinned
})

export default connect(mapStateToProps)(Map)

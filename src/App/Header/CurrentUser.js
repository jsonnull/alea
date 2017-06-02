/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import type { State } from 'store'

type Props = {
  username: string
}

const CurrentUser = (props: Props) => {
  const Username = styled.div`
    display: flex;
    margin-left: auto;
  `

  return <Username>
    { props.username }
  </Username>
}

const mapStateToProps = (state: State) => ({
  username: state.user.profile.displayName
})

export default connect(mapStateToProps)(CurrentUser)

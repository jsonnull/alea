/* @flow */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Session from './Session'
import type { State } from 'store'

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

type Props = {
  tab: string,
  name: string
}
class Content extends React.Component<Props> {
  render() {
    const { tab, ...restProps } = this.props

    const session = tab === 'Session' ? <Session {...restProps} /> : null

    return <ContentContainer>{session}</ContentContainer>
  }
}

type StateProps = { name: string }
const mapStateToProps = (state: State): StateProps => ({
  name: state.session.name
})

export default connect(mapStateToProps)(Content)

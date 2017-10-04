/* @flow */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Session from './Session'
import type { State } from 'store'

type ContentProps = {
  tab: string
}
const SidebarContent = (props: ContentProps) => {
  switch (props.tab) {
    case 'Session':
      return <Session {...props} />
    default:
      return <div />
  }
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

type Props = {
  tab: string,
  name: string
}
class Content extends React.Component {
  props: Props

  render() {
    return (
      <ContentContainer>
        <SidebarContent tab={this.props.tab} />
      </ContentContainer>
    )
  }
}

const mapStateToProps = (state: State) => ({
  name: state.session.name
})

export default connect(mapStateToProps)(Content)

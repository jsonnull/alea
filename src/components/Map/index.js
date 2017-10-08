/* @flow */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.map};
  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 4.8rem;
  left: 0;
  right: 0;
  bottom: 0;
`

type Props = {
  sidebar: boolean,
  chat: boolean
}
class Map extends React.Component<Props> {
  render() {
    const { sidebar, chat } = this.props

    let style = {
      right: chat ? '300px' : '0',
      left: sidebar ? '300px' : '0'
    }

    return <Container style={style} />
  }
}

export default Map

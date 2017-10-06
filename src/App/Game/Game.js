/* @flow */
import React from 'react'
import styled from 'styled-components'
import Chat from './Chat'
import Map from './Map'
import Sidebar from './Sidebar'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1;
`

class Game extends React.Component<*> {
  render() {
    return (
      <Container>
        <Map />
        <Sidebar />
        <Chat />
      </Container>
    )
  }
}

export default Game

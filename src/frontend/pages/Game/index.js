// @flow
import * as React from 'react'
import Game from 'frontend/containers/Game'
import Header from 'frontend/containers/Header'

const GamePage = ({ match }: Object) => (
  <React.Fragment>
    <Header />
    <Game match={match} />
  </React.Fragment>
)

export default GamePage

/* @flow */
import React from 'react'
import Chat from './Chat'
import Map from './Map'
import Sidebar from './Sidebar'
import styles from './style.css'

type Props = {
}

class Game extends React.Component<*, Props, *> {
  render () {
    return (
      <div className={styles.container}>
        <Map/>
        <Sidebar/>
        <Chat/>
      </div>
    )
  }
}

export default Game

/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  showTitle: boolean
}

class Home extends React.Component<*, Props, *> {
  render () {
    const { showTitle = false } = this.props

    const title = showTitle
      ? <div className={styles.title}>Aleamancer</div>
      : null

    return (
      <div className={styles.home}>
        <div className={styles.button}>
          A
        </div>
        { title }
      </div>
    )
  }
}

export default Home

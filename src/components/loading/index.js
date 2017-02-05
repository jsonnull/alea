import React from 'react'
import styles from './style.css'

class Loading extends React.Component {
  render () {
    return (
      <div className={ styles.loading }>
        <h1 className={ styles.title }>Aleamancer</h1>
        <img className={ styles.spinner } src='/img/spinner.svg' />
      </div>
    )
  }
}

export default Loading

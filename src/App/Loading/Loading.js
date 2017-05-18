import React from 'react'
import styles from './style.css'
import spinner from './spinner.svg'

class Loading extends React.Component {
  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles.loading }>
          <h1 className={ styles.title }>Aleamancer</h1>
          <img className={ styles.spinner } src={spinner} />
        </div>
      </div>
    )
  }
}

export default Loading
/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styles from './style.css'

type Props = {
  goHome: Function
}

class Home extends React.Component<*, Props, *> {
  render () {
    const { goHome } = this.props
    return (
      <div className={styles.home} onClick={goHome}>
        A
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  goHome: () => dispatch(push('/'))
})

export default connect(null, mapDispatchToProps)(Home)

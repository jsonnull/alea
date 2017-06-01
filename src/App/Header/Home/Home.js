/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styles from './style.css'

type Props = {
  showTitle?: boolean,
  goHome: Function
}

class Home extends React.Component<*, Props, *> {
  render () {
    const { showTitle = false, goHome } = this.props
    const title = showTitle ? 'Aleamancer' : 'A'
    const titleClass = showTitle ? styles.title : ''
    return (
      <div className={`${styles.home} ${titleClass}`} onClick={goHome}>
        { title }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  goHome: () => dispatch(push('/'))
})

export default connect(null, mapDispatchToProps)(Home)

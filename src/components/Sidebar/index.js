import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'

class Sidebar extends React.Component {
  render () {
    return (
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>
            Avaland
          </h1>
          <h2 className={styles.headerSubtitle}>
            Act I
          </h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.sidebar.open
  }
}

export default connect(
  mapStateToProps
)(Sidebar)

import React from 'react'
import { connect } from 'react-redux'
import { toggleChatPin } from '../../actions'
import styles from './style.css'

class Toolbar extends React.Component {
  render () {
    let toggleSidebar = (true)
      ? <i className='fa fa-chevron-left'></i>
      : <i className='fa fa-chevron-right'></i>

    let toggleChat = (this.props.pinned == true)
      ? <i className='fa fa-chevron-right'></i>
      : <i className='fa fa-chevron-left'></i>

    let pinned = (this.props.pinned == true) ? '' : styles.unpinned

    return (
      <div className={styles.toolbar}>
        <div className={styles.sidebar}>
          <div className={styles.button}
            onClick={() => {}}
          >
            { toggleSidebar }
          </div>
        </div>
        <div className={styles.chat + ' ' + pinned}>
          <div className={styles.button + ' ' + styles.modRight}
            onClick={() => { this.props.togglePinned() }}
          >
            { toggleChat }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pinned: state.chat.pinned
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePinned: () => dispatch(toggleChatPin())
  }
}

const ToolbarView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)

export default ToolbarView

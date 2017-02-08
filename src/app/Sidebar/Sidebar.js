/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { changeSidebarTab } from 'actions'
import Menu from './Menu'
import Content from './Content'
import styles from './style.css'

class Sidebar extends React.Component {
  render () {
    return (
      <div className={ styles.sidebar }>
        <Menu tab={this.props.tab} changeTab={this.props.changeTab} />
        <Content tab={this.props.tab} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.sidebar.open,
    tab: state.sidebar.tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: tab => dispatch(changeSidebarTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { changeSidebarTab } from 'actions'
import Menu from './Menu'
import Content from './Content'
import type { State } from 'store'
import type { Tab } from 'types'
import styles from './style.css'

type Props = {
  name: string,
  open: boolean,
  tab: Tab
}

class Sidebar extends React.Component<*, Props, *> {
  render () {
    const { name, tab, changeTab } = this.props
    return (
      <div className={ styles.sidebar }>
        <div className={styles.top}>
          <div className={styles.header}>
            {name}
          </div>
          <Menu tab={tab} changeTab={changeTab} />
        </div>
        <Content tab={tab} />
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    name: state.session.name,
    open: state.sidebar.open,
    tab: state.sidebar.tab
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    changeTab: tab => dispatch(changeSidebarTab(tab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

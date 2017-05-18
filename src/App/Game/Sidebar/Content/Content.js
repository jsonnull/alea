/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Session from './Session'
import Header from './Header'
import type { State } from 'store'
import styles from './style.css'

type ContentProps = {
  tab: string
}
const SidebarContent = (props: ContentProps) => {
  switch (props.tab) {
    case 'Session':
      return <Session {...props} />
    default:
      return <div />
  }
}

type Props = {
  tab: string,
  name: string
}
class Content extends React.Component {
  props: Props

  render () {
    return (
      <div className={ styles.content }>
        <Header>{ this.props.name }</Header>
        <SidebarContent tab={this.props.tab} />
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  name: state.session.name
})

export default connect(mapStateToProps)(Content)

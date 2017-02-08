/* @flow */
import React from 'react'
import Profile from './Profile'
import Session from './Session'
import styles from './style.css'

type ContentProps = {
  tab: string
}
const SidebarContent = (props: ContentProps) => {
  switch (props.tab) {
    case 'Profile':
      return <Profile {...props}/>
    case 'Session':
      return <Session {...props} />
    default:
      return <div />
  }
}

type Props = {
  tab: string
}
export default class Content extends React.Component {
  props: Props

  render () {
    return (
      <div className={ styles.content }>
        <SidebarContent tab={this.props.tab} />
      </div>
    )
  }
}

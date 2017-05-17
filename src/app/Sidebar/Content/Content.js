/* @flow */
import React from 'react'
import Session from './Session'
import Sessions from './Sessions'
import styles from './style.css'

type ContentProps = {
  tab: string
}
const SidebarContent = (props: ContentProps) => {
  switch (props.tab) {
    case 'Session':
      return <Session {...props} />
    case 'Sessions':
      return <Sessions {...props} />
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

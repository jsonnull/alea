// @flow
import * as React from 'react'

type Props = {
  children?: Function
}

export default class MessageList extends React.Component<Props> {
  timer: IntervalID
  scroll = React.createRef()

  componentDidMount() {
    // Every minute, update chat timestamps
    this.timer = setInterval(() => this.forceUpdate(), 60000)
  }

  componentDidUpdate() {
    if (this.scroll && this.scroll.current) {
      this.scroll.current.scrollTop += 10000
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    if (!this.props.children) {
      return null
    }

    return this.props.children(this.scroll)
  }
}

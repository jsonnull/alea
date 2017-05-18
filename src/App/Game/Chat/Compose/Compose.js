/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  onSend: Function
}

type State = {
  value: string,
  height: number
}

export default class Compose extends React.Component {
  props: Props
  state: State
  focused: boolean
  messageQueue: Array<string>
  autogrow: HTMLElement

  constructor (props: Props) {
    super(props)

    this.state = {
      value: '',
      height: 0
    }
    this.focused = false
    this.messageQueue = []
  }

  handleChange (event: Object) {
    const value = event.target.value

    const setHeightImmediate = (value.length > this.state.value.length)

    this.setState({
      value
    })

    if (setHeightImmediate) {
      this.calculateHeight()
    } else {
      this.setState({ height: 0 })
      window.requestAnimationFrame(() => this.calculateHeight())
    }
  }

  calculateHeight () {
    const autogrow = this.autogrow
    const scrollHeight = autogrow.scrollHeight

    let height = 0
    if (scrollHeight !== 50) {
      height = scrollHeight
    }

    this.setState({
      height
    })
  }

  handleKeyUp (event: Object) {
    if (event.key == 'Enter') {
      this.handleSubmit()
    }
  }

  handleSubmit () {
    this.messageQueue.push(this.state.value)
    this.props.onSend(this.state.value)
    this.setState({
      value: '',
      height: 0
    })
  }

  render () {
    let style = {}
    if (this.state.height !== 0) {
      style = {
        height: this.state.height + 'px'
      }
    }

    return (
      <div
        className={ styles.form }
      >
        <textarea
          className={ styles.formInput }
          type='text'
          placeholder='Send a message...'
          value={ this.state.value }
          ref={el => { this.autogrow = el }}
          style={ style }
          onChange={e => this.handleChange(e)}
          onKeyUp={e => this.handleKeyUp(e)}
        />
      </div>
    )
  }
}

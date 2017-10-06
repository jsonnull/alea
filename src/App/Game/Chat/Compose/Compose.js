/* @flow */
import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  padding: 2.4rem 1.2rem;
  padding-top: 10px;
  border-radius: 5px;
`

const Input = styled.textarea.attrs({
  type: 'text'
})`
  border: 0;
  height: 50px;
  display: block;
  padding: 1.2rem 1rem;
  line-height: 2.4rem;
  width: 100%;
  resize: none;
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.borderColor};
  background-color ${props => props.theme.background};
  border-radius: 5px;

  /*
  :global(.unpinned) & {
    background-color: $bgPrimary;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid $bgPrimary;

    :global(.dark) & {
      background-color: $bgPrimaryDark;
      border-color: $bgPrimaryDark;
    }
  }
  */
`

type Props = {
  onSend: Function
}

type State = {
  value: string,
  height: number
}

const defaultHeight = 50

export default class Compose extends React.Component<Props, State> {
  focused: boolean
  messageQueue: Array<string>
  autogrow: ?HTMLElement

  constructor(props: Props) {
    super(props)

    this.state = {
      value: '',
      height: 0
    }
    this.focused = false
    this.messageQueue = []
  }

  handleChange(event: Object) {
    const value = event.target.value

    const setHeightImmediate = value.length > this.state.value.length

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

  calculateHeight() {
    if (!this.autogrow) {
      return
    }

    const autogrow = this.autogrow
    const scrollHeight = autogrow.scrollHeight

    let height = 0
    if (scrollHeight !== defaultHeight) {
      // Must account for 2px of border
      height = scrollHeight + 2
    }

    this.setState({
      height
    })
  }

  handleKeyUp(event: Object) {
    if (event.key == 'Enter') {
      this.handleSubmit()
    }
  }

  handleSubmit() {
    this.messageQueue.push(this.state.value)
    this.props.onSend(this.state.value)
    this.setState({
      value: '',
      height: 0
    })
  }

  render() {
    let style = {}
    if (this.state.height !== 0) {
      style = {
        height: this.state.height + 'px'
      }
    }

    return (
      <Form>
        <Input
          placeholder="Send a message..."
          value={this.state.value}
          ref={el => {
            this.autogrow = el
          }}
          style={style}
          onChange={e => this.handleChange(e)}
          onKeyUp={e => this.handleKeyUp(e)}
        />
      </Form>
    )
  }
}

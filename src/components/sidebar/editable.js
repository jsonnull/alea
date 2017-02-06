import React from 'react'

export default class Editable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value,
      mode: 'normal'
    }
    this.shouldFocus = false
  }

  handleEdit (event) {
    this.setState({ value: event.target.value})
  }

  handleSubmit (event) {
    this.setState({ mode: 'normal' })
    if (typeof this.props.onChange == 'function') {
      this.props.onChange(this.state.value)
    }
  }

  handleClick () {
    this.setState({ mode: 'edit' })
    this.shouldFocus = true
  }

  handleKeyPress (event) {
    if (event.charCode == 13) {
      this.handleSubmit()
    }
  }

  componentDidUpdate () {
    if (this.shouldFocus == true) {
      this.refs.input.focus()
      window.requestAnimationFrame(() => {
        this.shouldFocus = false
      })
    }
  }

  render () {
    if (this.state.mode == 'normal') {
      return <div
        className={this.props.className}
        onClick={e => this.handleClick()}
      >
        { this.state.value }
      </div>
    } else {
      return <input
        className={this.props.className}
        ref="input"
        type="text"
        value={this.state.value}
        onChange={e => this.handleEdit(e)}
        onKeyPress={e => this.handleKeyPress(e)}
        onBlur={e => this.handleSubmit(e)}
        />
    }
  }
}

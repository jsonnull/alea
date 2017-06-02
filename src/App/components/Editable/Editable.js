/* @flow */
import React from 'react'
import styled from 'styled-components'
import withTheme from 'containers/withTheme'
import * as themes from 'styles/themes'

const Background = withTheme(styled.div`
  position: absolute;
  top: 0;
  right: 0;
  line-height: 3.6rem;
  color: ${props => themes[props.theme].colorSecondary};
`)

const Display = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

type Props = {
  value: string,
  className: string,
  onChange: Function
}

type State = {
  value: string,
  hover: boolean,
  mode: 'normal' | 'edit'
}

export default class Editable extends React.Component<*, Props, *> {
  state: State
  shouldFocus: boolean
  input: HTMLElement

  constructor (props: Props) {
    super(props)
    this.state = {
      value: this.props.value,
      hover: false,
      mode: 'normal'
    }
    this.shouldFocus = false
  }

  componentWillReceiveProps (nextProps: Props) {
    if (this.state.value !== nextProps.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }
  handleEdit (event: Object) {
    this.setState({ value: event.target.value })
  }

  handleSubmit () {
    this.setState({ mode: 'normal', hover: false })
    if (typeof this.props.onChange == 'function') {
      this.props.onChange(this.state.value)
    }
  }

  handleClick () {
    this.setState({ mode: 'edit' })
    this.shouldFocus = true
  }

  handleKeyPress (event: Object) {
    if (event.charCode == 13) {
      this.handleSubmit()
    }
  }

  handleMouseEnter () {
    this.setState({ hover: true })
  }

  handleMouseLeave () {
    this.setState({ hover: false })
  }

  componentDidUpdate () {
    if (this.shouldFocus == true) {
      this.input.focus()
      window.requestAnimationFrame(() => {
        this.shouldFocus = false
      })
    }
  }

  render () {
    if (this.state.mode == 'normal') {
      const icon = this.state.hover
        ? <Background><i className='fa fa-pencil'></i></Background>
        : null

      return <Display
        onClick={e => this.handleClick()}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        { this.state.value }
        { icon }
      </Display>
    } else {
      return <input
        ref={el => { this.input = el }}
        type="text"
        value={this.state.value}
        onChange={e => this.handleEdit(e)}
        onKeyPress={e => this.handleKeyPress(e)}
        onBlur={e => this.handleSubmit(e)}
        />
    }
  }
}

/* @flow */
import React from 'react'
import styled from 'styled-components'
import { defaultProps, branch, compose, withState, withHandlers } from 'recompose'
import withTheme from 'containers/withTheme'
import * as themes from 'styles/themes'

/*
componentWillReceiveProps (nextProps: Props) {
  if (this.state.value !== nextProps.value) {
    this.setState({
      value: nextProps.value
    })
  }
}
*/

const Background = withTheme(styled.div`
  position: absolute;
  top: 0;
  right: 0;
  line-height: 3.6rem;
  color: ${props => themes[props.theme].colorSecondary};
`)

const withHover = compose(
  withState('isHovering', 'setHovering', false),
  withHandlers({
    handleMouseEnter: props => () => props.setHovering(true),
    handleMouseLeave: props => () => props.setHovering(false)
  })
)

const withValue = compose(
  withState('value', 'setValue', props => props.value),
  withState('mode', 'setMode', 'normal'),
  withHandlers({
    handleClick: props => () => props.setMode('editing'),
    handleEdit: props => event => props.setValue(event.target.value),
    handleSubmit: props => () => {
      props.setMode('normal')
      props.onChange(props.value)
    },
    handleKeyPress: props => event => {
      if (event.charCode == 13) {
        props.handleSubmit()
      }
    }
  }),
  defaultProps({ input: 'input' })
)

const Display = (BaseComponent) => (props: Object) => {
  const icon = props.isHovering
    ? <Background><i className='fa fa-pencil'></i></Background>
    : null

  return <BaseComponent
    onClick={props.handleClick}
    onMouseEnter={props.handleMouseEnter}
    onMouseLeave={props.handleMouseLeave}
  >
    { props.value }
    { icon }
  </BaseComponent>
}

const Editing = (BaseComponent) => (props: Object) => {
  const Input = props.input
  return <Input
    autoFocus
    type="text"
    value={props.value}
    onChange={props.handleEdit}
    onKeyPress={props.handleKeyPress}
    onBlur={props.handleSubmit}
  />
}

const editable = compose(
  withValue,
  branch(
    props => props.mode === 'editing',
    Editing,
    compose(withHover, Display)
  )
)

export default editable

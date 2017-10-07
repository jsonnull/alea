/* @flow */
import styled, { css, withTheme } from 'styled-components'
import * as themes from 'styles/themes'
import * as colors from 'styles/colors'

const redMixin = css`
  background-color: ${colors.red};
  color: white;
  &:hover {
    background-color: ${colors.red};
    color: white;
  }
`

const greenMixin = css`
  background-color: ${colors.green};
  color: white;
  &:hover {
    background-color: ${colors.green};
    color: white;
  }
`

const outlineMixin = css`
  background-color: transparent;
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  &:hover {
    background-color: transparent;
  }
`

export const Button = withTheme(styled.button`
  display: inline-block;
  font-size: 1.3rem;
  line-height: 3.6rem;
  height: 3.6rem;
  padding: 0 1.2rem;
  outline: 0;
  color: ${themes.dark.color};
  background-color: ${colors.blue};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background, text-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-out;
  flex: 1;

  &:hover {
    text-shadow: 0 0 3px white;
    background-color: ${colors.lightBlue};
    transition: background, text-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ease-out;
  }

  ${props => (props.red ? redMixin : null)} ${props =>
      props.green ? greenMixin : null} ${props =>
      props.outline ? outlineMixin : null};
`)

export default Button

// @flow
import styled, { css } from 'styled-components'
import * as themes from 'styles/themes'
import { fontSize, colors, timings } from 'styles/common'
import { shade } from 'chromatism'

const boxShadow = color => `inset 0 -20px 10px -10px ${shade(-6, color).hex}`
const hoverBackground = color => shade(-9, color).hex
const hoverBoxShadow = color =>
  `inset 0 -20px 10px -10px ${shade(-15, color).hex};`

const redMixin = css`
  background: ${colors.red};
  box-shadow: ${boxShadow(colors.red)};
  &:hover {
    background: ${hoverBackground(colors.red)};
    box-shadow: ${hoverBoxShadow(colors.red)};
  }
`

const greenMixin = css`
  background: ${colors.green};
  box-shadow: ${boxShadow(colors.green)};
  &:hover {
    background: ${hoverBackground(colors.green)};
    box-shadow: ${hoverBoxShadow(colors.green)};
  }
`

const outlineMixin = css`
  background: transparent;
  box-shadow: none;
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  &:hover {
    box-shadow: ${props => hoverBoxShadow(props.theme.background)};
    background: transparent;
  }
`

export const Button = styled.button`
  display: inline-block;
  font-size: ${fontSize.small};
  line-height: 3rem;
  height: 3rem;
  padding: 0 1rem;
  outline: 0;
  color: ${themes.dark.color};
  background: ${colors.blue};
  box-shadow: ${boxShadow(colors.blue)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ${timings.easeOutQuad};
  flex: 1;

  &:hover {
    background: ${hoverBackground(colors.blue)};
    box-shadow: ${hoverBoxShadow(colors.blue)};
    transition: background, box-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ${timings.easeOutQuad};
  }

  ${props => (props.red ? redMixin : null)};
  ${props => (props.green ? greenMixin : null)};
  ${props => (props.outline ? outlineMixin : null)};
`

export default Button

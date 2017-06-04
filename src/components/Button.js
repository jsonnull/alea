/* @flow */
import styled from 'styled-components'
import withTheme from 'containers/withTheme'
import * as themes from 'styles/themes'
import * as colors from 'styles/colors'

export const Button = styled.button`
  display: inline-block;
  font-size: 1.3rem;
  line-height: 3.6rem;
  height: 3.6rem;
  padding: 0 1.2rem;
  outline: 0;
  font-family: 'Cinzel Decorative';
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
`

export const RedButton = Button.extend`
  background-color: ${colors.red};
  color: white;
  &:hover {
    background-color: ${colors.red};
    color: white;
  }
`

export const GreenButton = Button.extend`
  background-color: ${colors.green};
  color: white;
  &:hover {
    background-color: ${colors.green};
    color: white;
  }
`

export const OutlineButton = withTheme(Button.extend`
  background-color: transparent;
  border: 1px solid ${props => themes[props.theme].color};
  color: ${props => themes[props.theme].color};
`)

export default Button

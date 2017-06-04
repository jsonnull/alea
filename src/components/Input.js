/* @flow */
import styled from 'styled-components'
import withTheme from 'containers/withTheme'
import { body } from 'styles/fonts'
import * as themes from 'styles/themes'

const Input = styled.input`
  height: 3.6rem;
  padding: 6px 1rem;
  border: 1px solid ${props => themes[props.theme].borderColor};
  background: 1px solid ${props => themes[props.theme].background};
  color: ${props => themes[props.theme].color};
  border-radius: 4px;
  font-family: ${body};
  font-size: 1.5rem;
`

export default withTheme(Input)

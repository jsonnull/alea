/* @flow */
import styled from 'styled-components'
import { fonts, fontSize } from 'styles/common'

const Input = styled.input`
  padding: 6px 1rem;
  border: 1px solid ${props => props.theme.borderColor};
  background: 1px solid ${props => props.theme.background};
  color: ${props => props.theme.color};
  border-radius: 4px;
  font-family: ${fonts.body};
  font-size: ${fontSize.normal};
  height: 2.25rem;
`

export default Input

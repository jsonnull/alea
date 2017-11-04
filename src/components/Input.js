/* @flow */
import styled from 'styled-components'
import { fonts } from 'styles/common'

const Input = styled.input`
  height: 3.6rem;
  padding: 6px 1rem;
  border: 1px solid ${props => props.theme.borderColor};
  background: 1px solid ${props => props.theme.background};
  color: ${props => props.theme.color};
  border-radius: 4px;
  font-family: ${fonts.body};
  font-size: 1.5rem;
`

export default Input

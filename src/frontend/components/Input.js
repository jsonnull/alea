// @flow
import styled from 'styled-components'
import { fontSize, fonts } from 'frontend/styles/common'

const Input = styled.input`
  padding: 1rem;
  border: 1px solid
    ${props => (props.editable ? 'transparent' : props.theme.borderColor)};
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  border-radius: 4px;
  font-family: ${fonts.body};
  font-size: ${fontSize.normal};
  line-height: 1;

  &:focus {
    ${props =>
      props.editable &&
      `
      background: ${props.theme.backgroundSecondary};
      border-color: ${props.theme.borderColor};
    `};
  }
`

export default Input

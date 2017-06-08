/* @flow */
import styled, { withTheme } from 'styled-components'

const Label = styled.label`
  font-size: 1.2rem;
  color: ${props => props.theme.colorSecondary};
  font-weight: ${props => props.theme.name == 'dark' ? 'normal' : 'bold'};
  display: block;
`

export default withTheme(Label)

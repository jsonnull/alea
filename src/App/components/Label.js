/* @flow */
import styled from 'styled-components'
import withTheme from 'containers/withTheme'
import * as themes from 'styles/themes'

const Label = styled.label`
  font-size: 1.2rem;
  color: ${props => themes[props.theme].colorSecondary};
  font-weight: ${props => props.theme == 'dark' ? 'normal' : 'bold'};
  display: block;
`

export default withTheme(Label)

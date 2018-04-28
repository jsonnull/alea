// @flow
import styled from 'styled-components'
import { fontSize, fonts } from 'frontend/styles/common'

const Heading = styled.h1`
  font-size: ${fontSize.large};
  line-height: 1;
  font-family: ${fonts.heading};
  padding-bottom: 5px;
  color: ${props => props.theme.color};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin: 4rem 0 2rem;
`

export default Heading

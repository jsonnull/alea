// @flow
import styled from 'styled-components'
import { fontSize } from 'frontend/styles/common'

const Heading = styled.h1`
  font-size: ${fontSize.large};
  line-height: 1;
  padding-bottom: 1rem;
  color: ${props => props.theme.color};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin: 2rem 0 1rem;
`

export default Heading

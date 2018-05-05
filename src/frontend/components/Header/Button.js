// @flow
import styled from 'styled-components'
import { fontSize } from 'frontend/styles/common'

const Button = styled.div`
  height: 4rem;
  width: ${props => (props.square ? '4rem' : 'auto')};
  padding: 0 1rem;
  text-align: center;
  font-size: ${fontSize.normal};
  cursor: pointer;
  color: ${props => props.theme.colorInverted};

  &:hover {
    background: ${props => props.theme.backgroundInvertedSecondary};
  }
`

export default Button

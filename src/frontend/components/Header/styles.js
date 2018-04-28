// @flow
import styled from 'styled-components'
import { CONSTS } from 'frontend/styles/common'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: ${CONSTS.headerHeight};
  line-height: ${CONSTS.headerHeight};
  color: white;
  background-color: ${props => props.theme.backgroundInverted};
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0.5rem;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
`

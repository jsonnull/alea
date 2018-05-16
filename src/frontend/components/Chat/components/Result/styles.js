// @flow
import styled from 'styled-components'
import { colors } from 'frontend/styles/common'

export const Container = styled.div`
  margin-top: 0.6rem;
  padding: 0;
  background: ${props => props.theme.backgroundSecondary};
  border-left: 3px solid ${colors.blue};
  padding-left: 5px;
  border-radius: 5px;
`

export const Row = styled.div`
  border-top: 1px solid ${props => props.theme.borderColor};

  &:first-child {
    border-top: 0;
  }
`

export const Modifier = styled.span`
  font-weight: 400;
  color: ${props => props.theme.colorSecondary};
  margin-right: 0.4em;
`

export const Roll = styled.span`
  font-weight: 600;
  margin-right: 0.4em;
`

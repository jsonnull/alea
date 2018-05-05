// @flow
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 4rem;
  line-height: 4rem;
  color: white;
  background-color: ${props => props.theme.backgroundInverted};
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: ${props =>
    props.right ? 'flex-end' : props.middle ? 'center' : 'flex-start'};
`

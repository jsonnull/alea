// @flow
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  width: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${props =>
    props.isPinned
      ? `
    position: absolute;
    top: 4rem;
    right: 0;
    bottom: 0;
  `
      : `
    position: absolute;
    top: auto;
    right: 1rem;
    bottom: 1rem;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  `};
`

export const Loading = styled.div`
  padding: 10px;
`

export const Error = Loading

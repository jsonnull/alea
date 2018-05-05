// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import spinner from './spinner.svg'
import { colors } from 'frontend/styles/common'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  background: ${colors.blue};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Loading = styled.div`
  margin: auto;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.img.attrs({
  src: spinner
})`
  animation: ${spin} 1.4s infinite linear;
  transform: translateZ(0);
  margin: 1rem auto 0;
  width: 80px;
  height: 80px;
`

const LoadingModal = () => (
  <Container>
    <Loading>
      <Spinner />
    </Loading>
  </Container>
)

export default LoadingModal

/* @flow */
import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styles/common'

const Container = styled.div`
  background-color: ${props => props.theme.backgroundSecondary};
  height: 2.4rem;
  color: ${props => props.theme.colorMedium};
  font-size: ${fontSize.small};
  padding: 0 1.2rem;
`

const Info = () => (
  <Container>
    {'/roll 1d6, '}
    <strong>*bold*</strong> <em>_italic_</em>
  </Container>
)

export default Info

/* @flow */
import React from 'react'
import styled from 'styled-components'
import logo from '!raw-loader!./logo.svg'

const Container = styled.div`
  color: white;

  svg {
    height: 15px;
    fill: currentColor;
  }
`

const Logo = () => {
  return <Container dangerouslySetInnerHTML={{ __html: logo }} />
}

export default Logo

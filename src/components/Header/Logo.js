// @flow
import React from 'react'
import styled from 'styled-components'
import Logo from 'components/Logo'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  line-height: 3.25rem;
`

const HeaderLogo = () => {
  return (
    <Container>
      <Logo height="12px" />
    </Container>
  )
}

export default HeaderLogo

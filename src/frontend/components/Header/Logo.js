// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'
import LogoSvg from 'frontend/components/Logo'

const Wrapper = styled.div`
  margin: auto;
  display: flex;
`

const LogoButton = () => (
  <Wrapper>
    <Link to="/">
      <Button>
        <LogoSvg height="12px" />
      </Button>
    </Link>
  </Wrapper>
)

export default LogoButton

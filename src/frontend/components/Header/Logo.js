// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import LogoSvg from 'frontend/components/Logo'

const Area = Button.extend`
  padding-top: 12px;
  line-height: 1;
`

const LogoButton = () => (
  <Link to="/">
    <Area>
      <LogoSvg height="16px" />
    </Area>
  </Link>
)

export default LogoButton

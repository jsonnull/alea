// @flow
import React from 'react'
import Button from './Button'

type Props = {
  showLogin: Function
}

const Login = (props: Props) => {
  const { showLogin } = props

  return <Button onClick={showLogin}>Login</Button>
}

export default Login

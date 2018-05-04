// @flow
import React from 'react'
import sendPasswordResetEmail from 'frontend/firebase/sendPasswordReset'
import Header from 'frontend/containers/Header'
import ResetPassword from 'frontend/components/ResetPassword'
import { Background } from './styles'

export default () => (
  <Background>
    <Header />
    <ResetPassword sendPasswordResetEmail={sendPasswordResetEmail} />
  </Background>
)

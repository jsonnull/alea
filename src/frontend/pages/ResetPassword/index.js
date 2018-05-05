// @flow
import React from 'react'
import sendPasswordResetEmail from 'frontend/firebase/sendPasswordReset'
import FrontHeader from 'frontend/containers/FrontHeader'
import ResetPassword from 'frontend/components/ResetPassword'
import { Background } from './styles'

export default () => (
  <Background>
    <FrontHeader />
    <ResetPassword sendPasswordResetEmail={sendPasswordResetEmail} />
  </Background>
)

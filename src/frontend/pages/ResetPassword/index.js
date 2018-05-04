// @flow
import React from 'react'
import sendPasswordResetEmail from 'frontend/firebase/sendPasswordReset'
import ResetPassword from 'frontend/components/ResetPassword'

export default () => (
  <ResetPassword sendPasswordResetEmail={sendPasswordResetEmail} />
)

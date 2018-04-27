// @flow
import React from 'react'
import performLogin from 'frontend/firebase/login'
import Login from 'frontend/components/Login'

export default () => <Login performLogin={performLogin} />

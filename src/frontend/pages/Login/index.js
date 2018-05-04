// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'frontend/containers/Header'
import performLogin from 'frontend/firebase/login'
import Login from 'frontend/components/Login'
import { Background } from './styles'
import type { State } from 'frontend/store'

const LoginView = (props: any) => (
  <Background>
    <Header />
    <Login {...props} performLogin={performLogin} />
  </Background>
)

const mapStateToProps = (state: State) => ({
  userId: state.currentUser.id
})

export default connect(mapStateToProps, {})(LoginView)

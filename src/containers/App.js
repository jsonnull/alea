// @flow
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import App from '../components/App'
import * as themes from 'styles/themes'
import type { State } from 'store'
import type { Props } from '../components/App'

const mapStateToProps = (state: State): Props => ({
  appIsLoading: state.ui.appIsLoading,
  userIsLoggedIn: state.ui.userIsLoggedIn,
  theme: themes[state.preferences.theme],
  location: state.router.location
})

const Container = connect(mapStateToProps)(App)

export default hot(module)(Container)

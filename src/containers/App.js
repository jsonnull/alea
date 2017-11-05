// @flow
import { connect } from 'react-redux'
import App from '../components/App'
import * as themes from 'styles/themes'
import type { State } from 'store'

const mapStateToProps = (state: State): Props => ({
  appIsLoading: state.ui.appIsLoading,
  userIsLoggedIn: state.ui.userIsLoggedIn,
  theme: themes[state.user.preferences.theme],
  showSettings: state.ui.showSettings,
  location: state.router.location
})

export default connect(mapStateToProps)(App)

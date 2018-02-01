// @flow
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import Entry from '../components/Entry'
import type { State } from 'store'
import type { Props } from '../components/Entry'

const mapStateToProps = (state: State): Props => ({
  userIsLoggedIn: state.ui.userIsLoggedIn,
  location: state.router.location
})

const Container = connect(mapStateToProps)(Entry)

export default hot(module)(Container)

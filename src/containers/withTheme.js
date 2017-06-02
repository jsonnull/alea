/* @flow */
import { connect } from 'react-redux'
import type { State } from 'store'
import type { Theme } from 'types'

export type ThemeProps = {
  theme: Theme
}

const mapStateToProps = (state: State) => ({
  theme: state.user.preferences.theme
})

const withTheme = connect(mapStateToProps)

export default withTheme

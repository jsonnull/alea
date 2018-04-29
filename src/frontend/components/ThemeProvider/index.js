// @flow
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { getCurrentUserPreferences } from 'frontend/graphql/queries/currentUser/getCurrentUserPreferences'
import queryHandler from 'frontend/components/queryHandler'
import * as themes from 'frontend/styles/themes'
import type { State } from 'frontend/store'

type Props = {
  children?: React.Node,
  isLoading: boolean,
  currentUser: {
    preferences: Object
  }
}

const Provider = (props: Props) => {
  const theme = props.isLoading
    ? themes.light
    : themes[props.currentUser.preferences.theme]

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

const ProviderWithQuery = compose(
  getCurrentUserPreferences,
  queryHandler({
    queries: ['currentUserPreferencesQuery'],
    mergeData: props => ({
      ...props,
      currentUser: {
        preferences: props.currentUserPreferencesQuery.currentUser.preferences
      }
    })
  })
)(Provider)

const Wrapper = (props: {
  children?: React.Node,
  initialAuthFinished: boolean
}) => {
  const { initialAuthFinished, children } = props
  if (initialAuthFinished) {
    return <ProviderWithQuery>{children}</ProviderWithQuery>
  }

  return <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
}

const mapStateToProps = (state: State) => ({
  initialAuthFinished: state.ui.initialAuthFinished
})

export default connect(mapStateToProps, {})(Wrapper)

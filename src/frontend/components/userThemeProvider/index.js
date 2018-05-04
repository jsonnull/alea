// @flow
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { compose } from 'recompose'
import { getCurrentUserPreferences } from 'frontend/graphql/queries/currentUser/getCurrentUserPreferences'
import queryHandler from 'frontend/components/queryHandler'
import * as themes from 'frontend/styles/themes'

type Props = {
  children?: React.Node,
  isLoading: boolean,
  currentUserPreferencesQuery: {
    currentUser: {
      preferences: Object
    }
  }
}

const Provider = (props: Props) => {
  const { isLoading, currentUserPreferencesQuery: { currentUser } } = props
  const theme = isLoading ? themes.light : themes[currentUser.preferences.theme]

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default compose(
  getCurrentUserPreferences,
  queryHandler({
    queries: ['currentUserPreferencesQuery']
  })
)(Provider)

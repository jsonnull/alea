// @flow
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { getCurrentUserPreferencesQuery } from '../../queries/currentUser/getCurrentUserPreferences'
import preferencesDataFragment from '../../fragments/preferences/preferencesData'
import type { PreferencesDataType } from '../../fragments/preferences/preferencesData'

export type SetThemeType = {
  data: {
    preferences: {
      ...$Exact<PreferencesDataType>
    }
  }
}

const setThemeMutation = gql`
  mutation setTheme($theme: String!) {
    setTheme(theme: $theme) {
      ...preferencesData
    }
  }
  ${preferencesDataFragment}
`

const setThemeOptions = {
  props: ({ _ownProps, mutate }) => ({
    setTheme: (theme: string) => {
      return mutate({
        variables: {
          theme
        },
        optimisticResponse: {
          __typename: 'Mutation',
          setTheme: {
            __typename: 'Preferences',
            theme,
            chatPinned: true
          }
        },
        update: (store, { data: { setTheme } }) => {
          const data = store.readQuery({
            query: getCurrentUserPreferencesQuery
          })

          // Perform the modification to the preferences
          data.currentUser.preferences.theme = setTheme.theme

          store.writeQuery({
            query: getCurrentUserPreferencesQuery,
            data
          })
        }
      })
    }
  })
}

export default graphql(setThemeMutation, setThemeOptions)

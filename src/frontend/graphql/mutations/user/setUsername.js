// @flow
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { getCurrentUserProfileQuery } from '../../queries/currentUser/getCurrentUserProfile'
import profileDataFragment from '../../fragments/profile/profileData'
import type { ProfileDataType } from '../../fragments/profile/profileData'

export type SetUsernameType = {
  data: {
    profile: {
      ...$Exact<ProfileDataType>
    }
  }
}

const setUsernameMutation = gql`
  mutation setUsername($name: String!) {
    setUsername(name: $name) {
      ...profileData
    }
  }
  ${profileDataFragment}
`

const setUsernameOptions = {
  props: ({ _ownProps, mutate }) => ({
    // Add setChatPinned on props based on `mutate`
    setUsername: (name: string) => {
      return mutate({
        variables: {
          name
        },
        optimisticResponse: {
          __typename: 'Mutation',
          setUsername: {
            __typename: 'Profile',
            username: name
          }
        },
        update: (store, { data: { setUsername } }) => {
          const data = store.readQuery({
            query: getCurrentUserProfileQuery
          })

          data.currentUser.profile.username = setUsername.username

          store.writeQuery({
            query: getCurrentUserProfileQuery,
            data
          })
        }
      })
    }
  })
}

export default graphql(setUsernameMutation, setUsernameOptions)

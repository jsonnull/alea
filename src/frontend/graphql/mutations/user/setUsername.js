// @flow
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { getCurrentUserProfileQuery } from '../../queries/currentUser/getCurrentUserProfile'
import profileDataFragment from '../../fragments/profile/profileData'
import type { ProfileDataType } from '../../fragments/profile/profileData'
import type { DBProfile } from 'common/types'

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
    setUsername: (name: string) => {
      const optimisticProfile: DBProfile = {
        id: 'none',
        username: name,
        avatar: null
      }

      return mutate({
        variables: {
          name
        },
        optimisticResponse: {
          __typename: 'Mutation',
          setUsername: {
            __typename: 'Profile',
            ...optimisticProfile
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

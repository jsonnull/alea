// @flow
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { getCurrentUserProfileQuery } from '../../queries/currentUser/getCurrentUserProfile'
import profileDataFragment from '../../fragments/profile/profileData'
import type { ProfileDataType } from '../../fragments/profile/profileData'

export type UpdateUserAvatarType = {
  data: {
    profile: {
      ...$Exact<ProfileDataType>
    }
  }
}

const updateUserAvatarMutation = gql`
  mutation updateUserAvatar($avatar: String!) {
    updateUserAvatar(avatar: $avatar) {
      ...profileData
    }
  }
  ${profileDataFragment}
`

const updateUserAvatarOptions = {
  props: ({ _ownProps, mutate }) => ({
    updateUserAvatar: (avatar: string) => {
      return mutate({
        variables: {
          avatar
        },
        update: (store, { data: { updateUserAvatar } }) => {
          const data = store.readQuery({
            query: getCurrentUserProfileQuery
          })

          data.currentUser.profile.avatar = updateUserAvatar.avatar

          store.writeQuery({
            query: getCurrentUserProfileQuery,
            data
          })
        }
      })
    }
  })
}

export default graphql(updateUserAvatarMutation, updateUserAvatarOptions)

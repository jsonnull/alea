// @flow
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import profileDataFragment from '../../fragments/profile/profileData'
import type { ProfileDataType } from '../../fragments/profile/profileData'

export type GetCurrentUserProfileType = {
  profile: {
    ...$Exact<ProfileDataType>
  }
}

export const getCurrentUserProfileQuery = gql`
  query currentUserProfile {
    currentUser {
      profile {
        ...profileData
      }
    }
  }
  ${profileDataFragment}
`

export const getCurrentUserProfile = graphql(getCurrentUserProfileQuery, {
  name: 'currentUserProfileQuery'
})

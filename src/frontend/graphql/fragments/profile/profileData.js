// @flow
import gql from 'graphql-tag'

export type ProfileDataType = {
  username: string,
  avatar: ?string
}

export default gql`
  fragment profileData on Profile {
    username
    avatar
  }
`

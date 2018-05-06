// @flow
import gql from 'graphql-tag'

export type ProfileDataType = {
  id: string,
  username: string,
  avatar: ?string
}

export default gql`
  fragment profileData on Profile {
    id
    username
    avatar
  }
`

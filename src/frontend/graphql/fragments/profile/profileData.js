// @flow
import gql from 'graphql-tag'

export type ProfileDataType = {
  username: string
}

export default gql`
  fragment profileData on Profile {
    username
  }
`

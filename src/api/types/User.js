// @flow

const User = `
  type Profile {
    id: ID!
    username: String
  }

  type Preferences {
    id: ID!
    chatPinned: Boolean
    theme: String
  }

  type User {
    id: ID!
    profile: Profile
    preferences: Preferences
    games: [Game]
  }

  extend type Query {
    user(id: ID!): User
    currentUser: User
  }

  extend type Mutation {
    setChatPinned(isPinned: Boolean!): Preferences
    setTheme(theme: String!): Preferences
  }
`

export default User

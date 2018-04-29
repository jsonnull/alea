// @flow
import user from './rootUser'
import games from './games'
import preferences from './preferences'
import profile from './profile'
import currentUser from './currentUser'

export default {
  Query: {
    user,
    currentUser
  },
  User: {
    games,
    preferences,
    profile
  }
}

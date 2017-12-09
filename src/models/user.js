// @flow
import { Model, attr, many } from 'redux-orm'
import * as types from '../actions/types'
import type { Action } from '../actions/types'

class User extends Model {
  static modelName = 'User'

  static fields = {
    id: attr(),
    displayName: attr(),
    photoURL: attr(),
    sessions: many('Session')
  }

  static reducer(action: Action, User: Object) {
    switch (action.type) {
      case types.USER_LOGGED_IN:
        User.upsert({ id: action.id })
        break
      case types.UPDATE_USER_PROFILE:
      case types.HYDRATE_USER_PROFILE:
        User.withId(action.id).update(action.user)
        break
      case types.CHANGE_DISPLAY_NAME:
        User.withId(action.id).update({ displayName: action.name })
        break
    }

    return
  }
}

export default User

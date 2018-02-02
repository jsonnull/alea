// @flow
import { createSelector } from 'reselect'
import orm from '../models/orm'
import type { State } from '../store'
import currentUserIdSelector from './currentUserId'

const databaseSelector = (state: State) => state.orm

const currentUserSelector = createSelector(
  databaseSelector,
  currentUserIdSelector,
  (db, userId) => {
    if (userId === null) {
      return null
    }
    const session = orm.session(db)
    return session.User.withId(userId)
  }
)

export default currentUserSelector

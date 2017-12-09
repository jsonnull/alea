// @flow
import { createSelector } from 'reselect'
import currentUserIdSelector from './currentUserId'
import orm from '../models/orm'
import type { State } from '../store'

const databaseSelector = (state: State) => state.orm

const currentUserSelector = createSelector(
  databaseSelector,
  currentUserIdSelector,
  (db, userId) => {
    const session = orm.session(db)
    return session.User.withId(userId)
  }
)

export default currentUserSelector

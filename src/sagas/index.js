/* @flow */
import { fork } from 'redux-saga/effects'
import loadSessions from './loadSessions'
import loadUserPreferences from './loadUserPreferences'
import loadUserProfile from './loadUserProfile'
import login from './login'
import logout from './logout'
import receiveMessages from './receiveMessages'
import saveUserPreferences from './saveUserPreferences'
import saveUserProfile from './saveUserProfile'
import sendMessages from './sendMessages'

export default function * rootSaga (): Generator<*, *, *> {
  yield fork(loadSessions)
  yield fork(loadUserPreferences)
  yield fork(loadUserProfile)
  yield fork(login)
  yield fork(logout)
  yield fork(receiveMessages)
  yield fork(saveUserPreferences)
  yield fork(saveUserProfile)
  yield fork(sendMessages)
}

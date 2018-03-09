// @flow
import { fork } from 'redux-saga/effects'
//import loadCurrentSession from '../src/sagas/loadCurrentSession'
//import loadSessionMeta from '../src/sagas/loadSessionMeta'
//import loadUserSessions from '../src/sagas/loadUserSessions'
//import loadUserPreferences from '../src/sagas/loadUserPreferences'
//import loadUserProfile from '../src/sagas/loadUserProfile'
import loginFlow from '../src/sagas/loginFlow'
//import receiveMessages from '../src/sagas/receiveMessages'
//import saveUserPreferences from '../src/sagas/saveUserPreferences'
//import saveUserProfile from '../src/sagas/saveUserProfile'
//import sendMessages from '../src/sagas/sendMessages'
import switchSessions from '../src/sagas/switchSessions'

// Mock implementations
jest.mock('../src/firebase/session')
jest.mock('../src/firebase/getSessionMeta')
jest.mock('../src/firebase/getCurrentUserPreferences')
jest.mock('../src/firebase/getCurrentUserProfile')
jest.mock('../src/firebase/getSessions')
jest.mock('../src/firebase/messages')
jest.mock('../src/firebase/savePreferences')
jest.mock('../src/firebase/saveProfile')
jest.mock('../src/firebase/sendMessage')
jest.mock('../src/firebase/login')
jest.mock('../src/firebase/logout')

export default function* rootSaga(): Generator<*, *, *> {
  // yield fork(loadCurrentSession)
  // yield fork(loadSessionMeta)
  // yield fork(loadSessions)
  // yield fork(loadUserPreferences)
  // yield fork(loadUserProfile)
  yield fork(loginFlow)
  // yield fork(receiveMessages)
  // yield fork(saveUserPreferences)
  // yield fork(saveUserProfile)
  // yield fork(sendMessages)
  yield fork(switchSessions)
}

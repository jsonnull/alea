// @flow
import { take, call, select } from 'redux-saga/effects'
import { CHANGE_THEME, TOGGLE_CHAT_PIN } from 'actions/types'
import type { PreferencesState } from 'reducers/preferences'

export default function* saveUserPreferences(
  savePreferences: (preferences: PreferencesState) => void
): Generator<*, *, *> {
  while (true) {
    yield take([CHANGE_THEME, TOGGLE_CHAT_PIN])
    const preferences = yield select(state => state.preferences)
    yield call(savePreferences, preferences)
  }
}

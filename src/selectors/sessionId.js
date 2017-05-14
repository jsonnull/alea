// @flow
import { createSelector } from 'reselect'
import type { State } from 'store'

// All sessions begin with `/g/` in the URL
const sessionPrefix = '/g/'

// type LocationSelector = (State) => string
const pathnameSelector = (state: State) => state.router.location.pathname

// type SessionIdSelector = (State) => ?string
const sessionIdSelector = createSelector(
  pathnameSelector,
  (location: string) => {
    if (location.indexOf(sessionPrefix) !== 0) {
      return null
    }

    const id = location
      .replace(sessionPrefix, '')
      .split('/')
      .slice(0, 1)

    return id
  }
)

export default sessionIdSelector

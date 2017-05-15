// @flow
import { createSelector } from 'reselect'
import type { State } from 'store'

// All sessions begin with `/g/` in the URL
const sessionPrefix = '/g/'

const pathnameSelector = (state: State) => state.router.location.pathname

const sessionIdSelector = createSelector(
  pathnameSelector,
  (location: string) => {
    if (location.indexOf(sessionPrefix) !== 0) {
      return null
    }

    const id = location
      .replace(sessionPrefix, '')
      .split('/')

    if (id.length > 0) {
      return id[0]
    }

    return null
  }
)

export default sessionIdSelector

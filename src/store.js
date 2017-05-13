/* @flow */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import messages from './reducers/messages'
import session from './reducers/session'
import sidebar from './reducers/sidebar'
import ui from './reducers/ui'
import user from './reducers/user/'

import type { MessagesState } from './reducers/messages'
import type { SessionState } from './reducers/session'
import type { SidebarState } from './reducers/sidebar'
import type { UIState } from './reducers/ui'
import type { UserState } from './reducers/user'

/* State tree */
export type State = {
  messages: MessagesState,
  session: SessionState,
  sidebar: SidebarState,
  ui: UIState,
  user: UserState
}

export default function createStoreWithMiddleware (history: Object) {
  const reducers = combineReducers({
    messages,
    session,
    sidebar,
    ui,
    user,
    router: routerReducer
  })

  const middleware = routerMiddleware(history)

  // FIXME: Invoke like `devtool && devtool()`
  const devtool = window.__REDUX_DEVTOOLS_EXTENSION

  let store = createStore(
    reducers,
    applyMiddleware(middleware)
  )

  // Log the initial state
  console.log(store.getState())
  store.subscribe(() =>
    console.log(store.getState())
  )

  return store
}

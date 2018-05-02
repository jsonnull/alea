// @flow
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import setupStore, { dispatchSpy } from './store'
import client from './api'

type Props = {
  store: Object,
  children?: React.Element<*>
}
const App = (props: Props) => (
  <ApolloProvider client={client}>
    <Provider store={props.store}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </Provider>
  </ApolloProvider>
)

export default App

export { setupStore, dispatchSpy }

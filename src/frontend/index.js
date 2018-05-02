// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import initializeFirebase from 'frontend/firebase/initialize'
import Routes from 'frontend/routes'
import createStore from 'frontend/store'
import client from 'api/index'
import 'frontend/assets'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDJ-PsA14e45zCy8cGOCMN7a0R2fmoYmi8',
  authDomain: 'avaland-db534.firebaseapp.com',
  databaseURL: 'https://avaland-db534.firebaseio.com',
  projectId: 'avaland-db534',
  storageBucket: 'avaland-db534.appspot.com',
  messagingSenderId: '120753444769'
}

let store = createStore(history)
initializeFirebase(config, store)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  ((document.getElementById('root'): any): Element)
)

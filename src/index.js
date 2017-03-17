/* @flow */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'app/app'
import { Firebase, FirebaseProvider } from './backend'
import createStore from './store'
import './style.css'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDJ-PsA14e45zCy8cGOCMN7a0R2fmoYmi8",
  authDomain: "avaland-db534.firebaseapp.com",
  databaseURL: "https://avaland-db534.firebaseio.com",
  storageBucket: "avaland-db534.appspot.com",
  messagingSenderId: "120753444769"
}

let store = createStore()
let firebase = new Firebase(store, config)

ReactDOM.render(
  <FirebaseProvider firebase={firebase}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseProvider>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Frontend from './components/'
import createStore from './redux'
import './style.css'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDJ-PsA14e45zCy8cGOCMN7a0R2fmoYmi8",
  authDomain: "avaland-db534.firebaseapp.com",
  databaseURL: "https://avaland-db534.firebaseio.com",
  storageBucket: "avaland-db534.appspot.com",
  messagingSenderId: "120753444769"
}

let store = createStore(config)

ReactDOM.render(
  <Provider store={store}>
    <Frontend />
  </Provider>,
  document.getElementById('root')
)

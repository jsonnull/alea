/* @flow */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from 'app/app'
import { Firebase, FirebaseProvider } from './backend'
import createStore from './store'
import './assets'
import './style.css'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDJ-PsA14e45zCy8cGOCMN7a0R2fmoYmi8',
  authDomain: 'avaland-db534.firebaseapp.com',
  databaseURL: 'https://avaland-db534.firebaseio.com',
  storageBucket: 'avaland-db534.appspot.com',
  messagingSenderId: '120753444769'
}

let store = createStore()
let firebase = new Firebase(store, config)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <FirebaseProvider firebase={firebase}>
        <Provider store={store}>
          <Component />
        </Provider>
      </FirebaseProvider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  (module.hot: any).accept('app/app', () => { render(App) })
}

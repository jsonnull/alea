import Random from 'random-js'
import {
  SEND_MESSAGE
} from '../../actions'

const sendMessage = firebase => store => next => action => {
  if (action.type == SEND_MESSAGE) {
    firebase.sendMessage(action)
  } else {
    next(action)
  }
}

export default sendMessage

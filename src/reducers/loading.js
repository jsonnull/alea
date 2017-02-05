import {
  SET_LOADING
} from '../actions'

const initialState = true

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading 
    default:
      return state
  }
}

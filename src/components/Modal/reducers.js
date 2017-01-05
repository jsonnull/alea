import {
  SHOW_MODAL,
  HIDE_MODAL,
  MODALS
} from '../../actions'

const initialState = {
  activeModal: null 
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        activeModal: action.modal
      }
    case HIDE_MODAL:
      return {
        activeModal: null
      }
    default:
      return state
  }
}

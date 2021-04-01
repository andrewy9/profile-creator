import { SET_SOCIAL } from '../actions'

const initialState = [{
  network: '',
  networkAddress: ''
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCIAL:
      return action.payload

    default:
      return state
  }
}

export default reducer

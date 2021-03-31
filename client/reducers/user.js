import { SET_USER } from '../actions'

const initialState = {
  id: 'before change',
  name: '',
  email: '',
  image: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload

    default:
      return state
  }
}

export default reducer

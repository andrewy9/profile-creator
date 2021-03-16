import { SET_USER } from '../actions'

const initialState = {
  id: 'test',
  name: '',
  email: '',
  image: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user

    default:
      return state
  }
}

export default reducer
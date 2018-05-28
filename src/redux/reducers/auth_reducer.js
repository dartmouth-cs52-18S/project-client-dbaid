import { ActionTypes } from '../../actions/index'

const initial_state = {
  authenticated: false,
  user: {},
}

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      console.log('the AUTH_USER reducer got called;')
      console.log(`user should be here: ${action.payload}`)
      return Object.assign({}, state, {
        authenticated: true,
        user: action.payload,
      })
    case ActionTypes.DEAUTH_USER:
      console.log('the DEAUTH_USER reducer got called;')
      return Object.assign({}, state, {
        authenticated: false,
      })
    case ActionTypes.AUTH_ERROR:
      console.log('the AUTH_ERROR reducer got called;')
      return Object.assign({}, state, {
        authenticated: false,
      })
    default:
      console.log('E')
      return state
  }
}

export default AuthReducer

import { ActionTypes } from './types'

const initialState = {
  friends: {},
}

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FRIEND:
      return {
        friends: { ...state.friends, [action.friend._id]: action.friend },
      }
    case ActionTypes.GET_FRIENDS:
      return { friends: action.friends }
    default:
      return state
  }
}

export default FriendsReducer

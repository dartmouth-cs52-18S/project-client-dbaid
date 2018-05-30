// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {}

const Messages = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MESSAGES:
      return Object.assign({}, state, { [action.id]: action.messages })
    case ActionTypes.SEND_MESSAGE:
      if (state[action.chatID]) {
        return {
          ...state,
          [action.chatID]: [
            ...state[action.chatID], action.message],
        }
      }
      return {
        ...state,
        [action.chatID]: [action.message],
      }
    default:
      return state
  }
}

export default Messages

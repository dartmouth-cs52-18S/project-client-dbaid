// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {}

const Messages = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MESSAGES:
      console.log('the GET_MESSAGES reducer got called;')
      return Object.assign({}, state, { [action.id]: action.messages })
    case ActionTypes.SEND_MESSAGE:
      console.log('the SEND_MESSAGE reducer got called;')
      if (state[action.chatID]) {
        return {
          ...state,
          [action.chatID]: [
            ...state[action.chatID], action.message],
        }
      }
      return {
        ...state, [action.chatID]: [action.message],
      }
    default:
      return state
  }
}

export default Messages

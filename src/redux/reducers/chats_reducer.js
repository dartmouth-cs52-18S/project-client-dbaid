// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {
  chatID: '',
  chats: [],
}

const ChatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHATS:
      return Object.assign({}, state, { chats: action.chats })
    // case ActionTypes.CREATE_CHAT:
    //   return {
    //     chatID: action.chat.id,
    //     chats: [...state.chats, action.chat],
    //   }
    case ActionTypes.SET_CHAT:
      return Object.assign({}, state, { chatID: action.chatID })
    default:
      return state
  }
}

export default ChatsReducer

// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {
  chatID: '',
  chats: [],
}

const ChatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHATS:
      console.log('the GET_CHATS reducer got called;')
      return Object.assign({}, state, { chats: action.chats })
    case ActionTypes.CREATE_CHAT:
      console.log('the CREATE_CHAT reducer got called;')
      return {
        chatID: action.chat.id,
        chats: [...state.chats, action.chat],
      }
    case ActionTypes.SET_CHAT:
      console.log('the SET_CHAT reducer got called;')
      return Object.assign({}, state, { chatID: action.chatID })
    default:
      return state
  }
}

export default ChatsReducer

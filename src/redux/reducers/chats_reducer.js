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
      console.log(action)
      return Object.assign({}, state, { chats: action.payload.chats })
    case ActionTypes.CREATE_CHAT:
      console.log('the CREATE_CHAT reducer got called;')
      console.log(action)
      return {
        chatID: action.payload.id,
        chats: [...state.chats, action.payload.chat],
      }
    case ActionTypes.SET_CHAT:
      console.log('the SET_CHAT reducer got called;')
      console.log(action)
      return Object.assign({}, state, { chatID: action.payload.chatID })
    default:
      return state
  }
}

export default ChatsReducer

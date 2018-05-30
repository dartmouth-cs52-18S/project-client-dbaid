import { combineReducers } from 'redux'

import ListingsReducer from './reducers/listings_reducer'
import ChatsReducer from './reducers/chats_reducer'
import AuthReducer from './reducers/auth_reducer'

const reducers = combineReducers({
  listings: ListingsReducer,
  chats: ChatsReducer,
  auth: AuthReducer,
})

const rootReducer = (state, action) => reducers(state, action)

export default rootReducer

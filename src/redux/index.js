import { combineReducers } from 'redux'

import ListingsReducer from './reducers/listings_reducer'

const reducers = combineReducers({
  listings: ListingsReducer,
})

const rootReducer = (state, action) => reducers(state, action)

export default rootReducer

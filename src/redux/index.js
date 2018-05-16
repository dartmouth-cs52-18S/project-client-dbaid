import { combineReducers } from 'redux'

import BookingReducer from './reducers/booking-reducer'

const reducers = combineReducers({
  booking: BookingReducer,
})

const rootReducer = (state, action) => reducers(state, action)

export default rootReducer

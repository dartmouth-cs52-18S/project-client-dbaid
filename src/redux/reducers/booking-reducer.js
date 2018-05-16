// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {
  departure: '',
  destination: '',

}

const BookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DEPARTURE:
      return Object.assign({}, state, { departure: action.payload })
    case ActionTypes.UPDATE_DESTINATION:
      return Object.assign({}, state, { destination: action.payload })
    default:
      return state
  }
}

export default BookingReducer

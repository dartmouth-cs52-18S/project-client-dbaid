// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {
  all: [],
}
const ChatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LISTINGS:
      return Object.assign({}, state, { all: action.payload.result })
    default:
      return state
  }
}

export default ChatsReducer

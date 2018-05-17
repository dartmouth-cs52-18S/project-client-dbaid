// import initialState from 'app/redux/store/initialState'
import { ActionTypes } from './types'

const initialState = {
  all: [],
  selected: {},
}
const ListingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LISTINGS:
      return Object.assign({}, state, { all: action.payload.result })
    default:
      return state
  }
}

export default ListingsReducer

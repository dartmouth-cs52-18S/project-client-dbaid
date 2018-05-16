import { ActionTypes } from './types'

export function updateDeparture(location) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_DEPARTURE, payload: location })
  }
}

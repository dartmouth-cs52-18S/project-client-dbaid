import axios from 'axios'

import { ActionTypes } from './types'

const ROOT_URL = 'https://db-aid.herokuapp.com/api'

export function fetchListings() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/listings`).then((response) => {
      // console.log(response.data)
      dispatch({ type: ActionTypes.GET_LISTINGS, payload: response.data })
    }).catch((error) => {
      console.error(error)
    })
  }
}

export function createListing(listing, props, refresh) {
  return () => {
    axios.post(`${ROOT_URL}/listings`, listing, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        refresh()
        props.navigation.goBack()
      }).catch((error) => {
        console.error(error)
      })
  }
}

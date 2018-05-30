import axios from 'axios'

import { ActionTypes } from './types'

const ROOT_URL = 'https://db-aid.herokuapp.com/api'
// const ROOT_URL = 'https://localhost:9090/api'

export function fetchListings() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/listings`).then((response) => {
      // console.log(response.data)
      dispatch({ type: ActionTypes.GET_LISTINGS, payload: response.data })
    }).catch((error) => {
      console.error(error)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
  }
}

export function fetchLocationListings(location) {
  console.log(`${ROOT_URL}/geolistings/${location}`)
  return (dispatch) => {
    axios.get(`${ROOT_URL}/geolistings/${location}`).then((response) => {
      // console.log(response.data)
      dispatch({ type: ActionTypes.GET_LISTINGS, payload: response.data })
    }).catch((error) => {
      console.error(error)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
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
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }
}


export function fetchMessages() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/chats`).then((response) => {
      // console.log(response.data)
      dispatch({ type: ActionTypes.GET_MESSAGES, payload: response.data })
    }).catch((error) => {
      console.error(error)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
  }
}

export function sendMessage(chat, props, refresh) {
  return () => {
    axios.post(`${ROOT_URL}/chats`, chat, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        refresh()
        props.navigation.goBack()
      }).catch((error) => {
        console.error(error)
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }
}

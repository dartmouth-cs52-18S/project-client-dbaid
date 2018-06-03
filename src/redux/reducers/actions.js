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


export function createChat(ids, props, params) {
  console.log('TRYInG TO START CHAT!')
  console.log(ids)
  console.log('props')
  console.log(props)
  console.log('params')
  console.log(params)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/chats`, ids, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('reponse')
        console.log(response)
        dispatch({ type: ActionTypes.CREATE_CHAT, payload: response.data })
        console.log('New Chat Created! NAVIGATE TO TAB')
        props.navigation.navigate('ChatDetail', { params }) // Go to individual chat within Big Chat Nav
      }).catch((error) => {
        console.error(error)
        console.log('JUST ERROR')
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          console.log('JUST RESPONSE ERROR')
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


export function fetchChats() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/chats`).then((response) => {
      console.log('fetching all chats')
      console.log(response.data)
      dispatch({ type: ActionTypes.GET_CHATS, payload: response.data })
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

export function setChat(chatID) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SET_CHAT, payload: chatID })
  }
}

export function sendMessage(chatID, message) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SEND_MESSAGE, payload: { chatID, message } })
  }
}

// fetchMessages
export function fetchMessages(otherID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/messages/${otherID}`).then((response) => {
      console.log('fetching all messages')
      console.log(response.data)
      dispatch({ type: ActionTypes.GET_CHAT, payload: response.data })
    }).catch((error) => {
      console.log('fetch messages error')
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

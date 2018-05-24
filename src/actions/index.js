import axios from 'axios'
import { AsyncStorage } from 'react-native'

const ROOT_URL = 'https://db-aid.herokuapp.com/api'

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  }
}

export function signinUser(signin, props) {
  console.log('Signing in the user')
  console.log('signin state')
  console.log(signin)
  console.log('signin props')
  console.log(props)

  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our
  // create post method really)
  // does an axios.post on the /signin endpoint
  return (dispatch) => {
    // make new post with axios
    axios.post(`${ROOT_URL}/signin`, signin)
      .then((response) => {
        console.log(response)
        dispatch({ type: ActionTypes.AUTH_USER })
        AsyncStorage.setItem('token', response.data.token)
        props.navigation.navigate('AppFlow', props)
      })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`))
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
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  AsyncStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  }
}


export function signupUser(signup, props) {
  console.log('Signing up the user')

  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our
  // create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  AsyncStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    // make new post with axios
    axios.post(`${ROOT_URL}/signup`, signup)
      .then((response) => {
        console.log(response)
        dispatch({ type: ActionTypes.AUTH_USER })
        AsyncStorage.setItem('token', response.data.token)
        console.log('TO APP NAVIGATE')
        props.navigation.navigate('AppFlow')
      })
      .catch((error) => {
        console.log(error)
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


// deletes token from AsyncStorage
// and deauths
export function signoutUser(props) {
  return (dispatch) => {
    AsyncStorage.removeItem('token')
    dispatch({ type: ActionTypes.DEAUTH_USER })
    props.navigation.navigate('AuthLanding')
  }
}

import axios from 'axios'
import AsyncStorage from 'react-native'

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

export function signinUser(signin, history) {
  console.log('Signing in the user')

  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our
  // create post method really)
  // does an axios.post on the /signin endpoint
  return (dispatch) => {
    // make new post with axios
    axios.post(`${ROOT_URL}/signin`, signin)
      .then((response) => {
        console.log(response)
        // go to the index page
        history.push('/')
        dispatch({ type: ActionTypes.AUTH_USER })
        AsyncStorage.setItem('token', response.data.token)
      })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`))
      })
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  AsyncStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  }
}


export function signupUser(signup, history) {
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
        // go to the index page
        history.push('/')
        dispatch({ type: ActionTypes.AUTH_USER })
        AsyncStorage.setItem('token', response.data.token)
      })
      .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`))
      })
  }
}


// deletes token from AsyncStorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    AsyncStorage.removeItem('token')
    dispatch({ type: ActionTypes.DEAUTH_USER })
    history.push('/')
  }
}

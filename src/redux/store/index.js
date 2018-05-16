import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../index'
// import initialState from 'app/redux/store/initialState'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //eslint-disable-line

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)))

export default store

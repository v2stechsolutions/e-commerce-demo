import { createStore, combineReducers } from 'redux'
import { cartReducer } from '../reducers'

const appReducer = combineReducers({ cartData: cartReducer });

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
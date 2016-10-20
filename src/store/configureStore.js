import {createStore,  combineReducers} from 'redux'
import reducers from '../reducers/index'

let store = createStore(reducers)
export default store

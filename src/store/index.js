import {createStore} from 'redux' 
import todoListReducer from './reducers'

const store = createStore(todoListReducer)

export default store


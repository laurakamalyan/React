import {createStore} from 'redux'
import reducer from '../reducers/reduce.js'

const store = createStore(reducer);

export default store;

import movieReducer from './components/redux/reducers'
import { createStore } from 'redux'

const store = createStore(movieReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
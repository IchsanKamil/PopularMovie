import { createStore, combineReducers, applyMiddleware } from 'redux';
import favoriteReducer from './reducers/favoriteReducer.js';
import movieReducer from './reducers/movieReducer.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  movieReducer,
  favoriteReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store
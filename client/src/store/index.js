import { createStore, combineReducers, applyMiddleware } from 'redux';
import favoriteReducer from './reducers/favoriteReducer.js';
import movieReducer from './reducers/movieReducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({
  movieReducer,
  favoriteReducer
})

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store
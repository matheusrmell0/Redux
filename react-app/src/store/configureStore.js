import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Reducers
import cache from '../pratica/cachefetch'
import contador from './reducers/contador';
import modal from './reducers/modal';
import login from './reducers/login';
import products from '../pratica/filtros/products';

// Middlewares
import logger from './middleware/logger';
import localStorage from './middleware/localStorage';

const middleware = [...getDefaultMiddleware(), logger, localStorage];
const reducer = combineReducers({ contador, modal, login, cache, products});
const store = configureStore({ reducer, middleware });

// Store envolvendo com provider o APP
export default store;


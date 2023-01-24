import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Reducers
import contador from './reducers/contador';
import modal from './reducers/modal';
import login from './reducers/login';

// Middlewares
import logger from './middleware/logger';
import localStorage from './middleware/localStorage';

const middleware = [...getDefaultMiddleware(), logger, localStorage];
const reducer = combineReducers({ contador, modal, login});
const store = configureStore({ reducer, middleware });

// Store envolvendo com provider o APP
export default store;

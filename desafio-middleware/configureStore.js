import { fetchReducer } from './reducers/stateFetch.js';
import { userReducer } from './reducers/stateUser.js';

// Middlewares

// Thunk
const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

// Logger
const logger = (store) => (next) => (action) => {
  console.group('ACTION:', action);
  console.log('PREV_STATE:', store.getState());
  next(action);
  console.log('NEXT_STATE:', store.getState());
  console.groupEnd();
  return next(action);
};

// LocalStorage
const localStorage = (store) => (next) => (action) => {
  const result = next(action);
  if (action.payload !== undefined) {
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload),
    );
  }
  return result;
};

// Redux Organizacao
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
  const reducers = Redux.combineReducers({userReducer, fetchReducer})
const enhancer = composeEnhancers(
  Redux.applyMiddleware(logger, thunk, localStorage),
);
const store = Redux.createStore(reducers, enhancer);

export default store;

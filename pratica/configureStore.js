import { aulasDesafio, alunosDesafio } from './desafio.js';

    const logger = (store) => (next) => (action) => {
      console.group(action.type)
      console.log('ACTION: ', action)
      console.log('PREV_STATE: ', store.getState())
      next(action)
      console.log('NEXT_STATE', store.getState())
      console.groupEnd()
      return next(action)
    }

const { createStore, applyMiddleware, compose, combineReducers } = Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(logger))

const reducer = combineReducers({ aulasDesafio, alunosDesafio });
const store = createStore(reducer, enhancer)

export default store;

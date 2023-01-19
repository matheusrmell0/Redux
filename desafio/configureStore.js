import {alunoReducer, aulasReducer} from './desafio.js';

const reducer = Redux.combineReducers({ alunoReducer, aulasReducer });
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

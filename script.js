import store from './desafio_otimizado/store/configureStore.js';
import { tokenFetch } from './desafio_otimizado/store/token.js';
import { userFetch } from './desafio_otimizado/store/user.js';

async function userLoguin(user) {
  let state = store.getState()
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user));
    state = store.getState()
  }
  await store.dispatch(userFetch(state.token.data))
}

const usuario = {username: 'dog', password: 'dog'}
userLoguin(usuario)
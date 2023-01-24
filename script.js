// const initialState = {
//   nome: 'Mello',
//   idade: 24,
//   id: 1
// }

// function reducer(state = initialState, action) {
//   return state
// }

// const store = Redux.createStore(reducer)
// const state = store.getState()
// console.log(state)

//
// Contantes
// const INCREMENTAR = 'INCREMENTAR'
// const SOMAR = 'SOMAR'
// const DIMINUIR = 'DIMINUIR'
// const MULTIPLICAR = 'MULTIPLICAR'

// // Action Creator
// function incrementar() {
//   return { type: INCREMENTAR }
// }

// function somar() {
//   return { type: SOMAR }
// }

// function diminuir() {
//   return { type: DIMINUIR }
// }

// function multiplicar(payload) {
//   return { type: MULTIPLICAR, payload }
// }

// const initialState = 10

// function reducer(state = initialState, action) {
//   if (action.type === DIMINUIR) {
//     return state - 1
//   }
//   if (action.type === INCREMENTAR) {
//     return state + 1
//   }
//   if (action.type === SOMAR) {
//     return state + action.payload
//   }
//   if (action.type === MULTIPLICAR) {
//     return state * action.payload
//   }
//   else {
//     return state
//   }
// }

// const store = Redux.createStore(reducer)

// store.dispatch({ type: SOMAR, payload: 25 })
// store.dispatch({ type: INCREMENTAR })
// store.dispatch({ type: DIMINUIR })
// store.dispatch(multiplicar(2))

// function render() {
//   const state = store.getState()
//   document.getElementById('span').innerText = state
// }
// render()

// store.subscribe(render)

// document.getElementById('btn').addEventListener('click', () => {
//   store.dispatch(multiplicar(2))
//   state = store.getState()
// })

//
// const INCREMENTAR = 'INCREMENTAR'
// const REDUZIR = 'REDUZIR'

// function incrementar() {
//   return { type: INCREMENTAR }
// }
// function reduzir() {
//   return { type: REDUZIR }
// }

// function contador(state = 0, action) {
//   switch (action.type) {
//     case INCREMENTAR:
//       return state + 1
//     case REDUZIR:
//       return state - 1
//     default:
//       return state
//   }
// }

// function modal(state = false, action) {
//   switch (action.type) {
//     case 'ABRIR':
//       return true
//     case 'FECHAR':
//       return false
//     default:
//       return state
//   }
// }

// const reducer = Redux.combineReducers({ contador, modal })
// const store = Redux.createStore(reducer)

// function render() {
//   const { contador, modal } = store.getState()
//   const span = document.getElementById('span')
//   span.innerText = contador
//   if (modal) { span.style.display = 'inline-block' } else span.style.display = 'none'
// }
// render()
// store.subscribe(render)

// document.getElementById('btn').addEventListener('click', () => {
//   store.dispatch(incrementar())
//   state = store.getState()
// })
// document.getElementById('btn').addEventListener('contextmenu', () => {
//   store.dispatch(reduzir())
//   state = store.getState()
// })

// document.getElementById('abrir').addEventListener('click', () => {
//   store.dispatch({ type: 'ABRIR' })
// })
// document.getElementById('fechar').addEventListener('click', () => {
//   store.dispatch({ type: 'FECHAR' })
// })
//

// const store = Redux.createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// function reducer(state = 0, action) {
//   switch (action.type) {
//     case 'AUMENTAR':
//       return action.payload
//     default: return state
//   }
// }

// function render() {
//   // Efeito colateral sempre no Render
//   document.getElementById('block').style.width = `${store.getState()}px`
// }
// render()
// store.subscribe(render)
// store.dispatch({ type: 'AUMENTAR', payload: 100 })
// store.dispatch({ type: 'AUMENTAR', payload: 150 })
// store.dispatch({ type: 'AUMENTAR', payload: 200 })
// store.dispatch({ type: 'AUMENTAR', payload: 500 })

//
// const store = Redux.createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// function reducer(state = 0, action) {
//   switch (action.type) {
//     case 'AUMENTAR':
//       return action.payload
//     default: return state
//   }
// }

// function render() {
//   // Efeito colateral sempre no Render
//   document.getElementById('block').style.width = `${store.getState()}px`
// }
// render()
// store.subscribe(render)
// store.dispatch({ type: 'AUMENTAR', payload: 100 })
// store.dispatch({ type: 'AUMENTAR', payload: 150 })
// store.dispatch({ type: 'AUMENTAR', payload: 200 })
// store.dispatch({ type: 'AUMENTAR', payload: 500 })

//Imutabilidade
// const SOMAR = 'SOMAR'
// function somar(payload) {
//   return { type: SOMAR, payload }
// }

// const initialState = 0
// function incressOne(state = initialState, action) {
//   switch (action.type) {
//     case SOMAR:
//       return state + action.payload
//     default:
//       return state
//   }
// }

// const reducer = Redux.combineReducers({incressOne})
// const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// function render() {
//   store.dispatch(somar(2))
// }
// render()

// store.subscribe(render)
// const state = store.getState()
// console.log(state.incressOne)

//
// const NOME = 'NOME'
// const IDADE = 'IDADE'
// const initialState = {
//   nome: 'Matheus',
//   idade: 24
// }

// function changeName(payload) {
//   return { type: NOME, payload }
// }
// function changeIdade(payload) {
//   return { type: IDADE, payload }
// }

// const dados = immer.produce((state, action) => {
//   switch (action.type) {
//     case NOME:
//       state.nome = action.payload
//       break;
//     case IDADE:
//       state.idade = action.payload
//       break;
//   }
// }, initialState)

// const reducer = Redux.combineReducers({ dados })
// const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const state = store.getState()

// function render() {
//   const nome = document.getElementById('name')
//   nome.innerText = state.dados.nome
//   const idade = document.getElementById('idade')
//   idade.innerText = state.dados.idade
// }
// render()
// store.subscribe(render)

// store.dispatch(changeName('Mello'))
// store.dispatch(changeName('Tete'))
// store.dispatch(changeName('Toto'))
// store.dispatch(changeName('Meleinho'))
// store.dispatch(changeName('Mathewus'))
// store.dispatch(changeIdade(35))
// store.dispatch(changeIdade(25))
// store.dispatch(changeIdade(15))
// store.dispatch(changeIdade(55))
// store.dispatch(changeIdade(85))
//
// const NOME = 'NOME'
// const IDADE = 'IDADE'
// const SOMAR = 'SOMAR'

// const initialState = {
//   nome: 'Matheus',
//   idade: 24,
//   id: 1
// }

// function changeName(payload) {
//   return { type: NOME, payload }
// }
// function changeIdade(payload) {
//   return { type: IDADE, payload }
// }

// const reducer = immer.produce((state, action) => {
//   switch (action.type) {
//     case NOME:
//       state.nome = action.payload
//       break;
//     case IDADE:
//       state.idade = action.payload
//       break;
//     case SOMAR:
//       state.id + action.payload
//       break;
//   }
// }, initialState)

// const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const state = store.getState()

// function render() {
//   const nome = document.getElementById('name')
//   nome.innerText = state.nome
//   const idade = document.getElementById('idade')
//   idade.innerText = state.idade
//   store.dispatch({ type: SOMAR, payload: 2 })
// }
// render()
// store.subscribe(render)
// store.dispatch(changeName('Mel'))
// store.dispatch(changeName('Mello'))

// document.getElementById('btn').addEventListener('click', store.dispatch({ type: SOMAR, payload: 1 }))
//
// import store from './store/configureStore.js'
// import { incrementar } from './store/contador.js'

// function render() {
//   document.getElementById('num').innerText = store.getState().contador
// }

// store.subscribe(() => {
//   console.log('Funcionou')
//   console.log(store.getState())
//   render()
// })

// store.dispatch(incrementar(3))
// store.dispatch(incrementar(5))
// store.dispatch(incrementar(8))

// document.getElementById('btn').addEventListener('click', () => store.dispatch(incrementar(1)))

// // Desafio
// import store from './desafio/configureStore.js'
// import { incrementarTempo, reduzirTempo, modificarEmail, completarAula, completarCurso, resetarCurso } from './desafio/desafio.js'

// function render() {
//   const { alunoReducer, aulasReducer } = store.getState()
//   document.getElementById('nome').innerText = alunoReducer.nome
//   document.getElementById('email').innerText = alunoReducer.email
//   document.getElementById('tempo').innerText = alunoReducer.diasRestantes
//   document.getElementById('completa').innerText = aulasReducer.filter(({ completa }) => completa).length
//   aulasReducer.map(({ completa, nome }) => {
//     if (completa) document.getElementById('aulas').innerText = nome
//   })
// }
// render()
// store.subscribe(render)

// store.dispatch(incrementarTempo())
// store.dispatch(modificarEmail('matheusrmello@gmail.com'))
// store.dispatch(completarCurso())
// store.dispatch(completarAula(2))
// store.dispatch(resetarCurso())

//
// import store from './pratica/configureStore.js'
// import { incrementar_tempo, reduzir_tempo, modificar_email, completar_aula, completar_curso, resetar_curso } from './pratica/desafio.js'

// function render() {
//   const { aulasDesafio, alunosDesafio } = store.getState()
//   document.getElementById('nome').innerText = alunosDesafio.nome
//   document.getElementById('email').innerText = alunosDesafio.email
//   document.getElementById('tempo').innerText = alunosDesafio.diasRestantes
//   aulasDesafio.map(({ nome, completa }) => { if (completa) document.getElementById('aulas').innerText = nome })
//   document.getElementById('completa').innerText = aulasDesafio.filter(({completa}) => completa).length
// }
// render()

// store.subscribe(render)
// store.dispatch(incrementar_tempo())
// store.dispatch(completar_curso())
// store.dispatch(resetar_curso())
// store.dispatch(completar_aula(3))
// store.dispatch(completar_aula(2))
// store.dispatch(completar_aula(1))
// console.log(store.getState())

//Currying

// function somar(a, b, c) {
//   return a + b + c
// }
// console.log(somar(2, 5, 10))

// function somar_(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c
//     }
//   }
// }
// console.log(somar_(2)(5)(10))
// //

// const li = document.querySelectorAll('li')
// const dataSlideList = [...li].map(el => el.getAttribute('data-slide'))
// const idSlideList = [...li].map(el => el.getAttribute('id'))
// console.log(dataSlideList)
// console.log(idSlideList)

// const li = document.querySelectorAll('li')
// const getElementAttr = (el, key) => {
//   return el.getAttribute(key)
// }
// const dataSlideList = [...li].map(el => getElementAttr(el, 'data-slide'))
// const idSlideList = [...li].map(el => getElementAttr(el, 'id'))
// console.log(dataSlideList)
// console.log(idSlideList)

// const li = document.querySelectorAll('li')

// const getElementAttr = (key) => (el) => el.getAttribute(key)

// const getAttrDataSlide = getElementAttr('data-slide')
// const getAttrDataId = getElementAttr('id')

// const dataSlideList = [...li].map(getAttrDataSlide)
// const idSlideList = [...li].map(getAttrDataId)
// console.log(dataSlideList)
// console.log(idSlideList)

//Redux Middleware

// Constantes
// const INCREMENTAR = 'INCREMENTAR'
// const REDUZIR = 'REDUZIR'

// // Action creator
// const reduzir = (number) => ({ type: REDUZIR, payload: number })

// // Middleware
// const logger = (store) => (next) => (action) => {
//   console.group(action.type)
//   console.log('ACTION: ', action)
//   console.log('PREV_STATE: ', store.getState())
//   next(action)
//   console.log('NEXT_STATE', store.getState())
//   console.groupEnd()
//   return next(action)
// }

// // Reducer
// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENTAR:
//       return state + 1
//     case REDUZIR:
//       return state - action.payload
//     default:
//       return state
//   }
// }

// // Redux
// const { createStore, applyMiddleware, compose } = Redux
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const enhancer = composeEnhancers(applyMiddleware(logger))
// const store = createStore(reducer, enhancer)

// //Dispatch
// store.dispatch({ type: INCREMENTAR })
// store.dispatch({ type: INCREMENTAR })
// store.dispatch({ type: INCREMENTAR })
// store.dispatch(reduzir(5))
//

// const initialState = {
//   loading: false,
//   data: null,
//   error: null,
// }

// const reducer = immer.produce((state, action) => {
//   switch (action.type) {
//     case 'FETCH_STARTED':
//       return ({ ...state, loading: true })
//       break
//     case 'FETCH_SUCCESS':
//       return ({ error: null, loading: false, data: action.payload })
//       break
//     case 'FETCH_FAILED':
//       return ({ data: null, loading: false, error: action.payload })
//       break
//   }
// }, initialState)

// async function fetchUrl(dispatch, url) {
//   try {
//     dispatch({ type: 'FETCH_STARTED' })
//     const data = await fetch(url).then(r => r.json())
//     dispatch({ type: 'FETCH_SUCCESS', payload: data })
//   }
//   catch (error) {
//     dispatch({ type: 'FETCH_FAILED', payload: error.message })
//   }
// }

// const logger = (store) => (next) => (action) => {
//   console.group(action.type)
//   console.log('ACTION', action)
//   console.log('PREV_STATE', store.getState())
//   next(action)
//   console.log('NEXT_STATE', store.getState())
//   console.groupEnd
//   return next(action)
// }

// const { applyMiddleware, compose, createStore } = Redux;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const enhancer = composeEnhancers(applyMiddleware(logger))
// const store = createStore(reducer, enhancer)

// fetchUrl(store.dispatch, 'https://dogsapi.origamid.dev/json/api/photo')
//

// // Redux Thunk
// // Initial state
// const initialState = {
//   loading: false,
//   data: localStorageParse('data', null),
//   error: null,
// }

// // Reducer
// const reducer = immer.produce((state, action) => {
//   switch (action.type) {
//     case 'FETCH_STARTED':
//       return ({ ...state, loading: true })
//       break
//     case 'FETCH_SUCCESS':
//       return ({ error: null, loading: false, data: action.payload })
//       break
//     case 'FETCH_FAILED':
//       return ({ data: null, loading: false, error: action.payload })
//       break
//   }
// }, initialState)

// // Logger middleware
// const logger = (store) => (next) => (action) => {
//   console.group(action.type)
//   console.log('ACTION', action)
//   console.log('PREV_STATE', store.getState())
//   next(action)
//   console.log('NEXT_STATE', store.getState())
//   console.groupEnd
//   return next(action)
// }

// // Thunk middleware
// const thunk = (store) => (next) => (action) => {
//   if (typeof action === 'function') {
//     return action(store.dispatch, store.getState)
//   }
//   return next(action)
// }

// // Fetch
// function fetchUrl(url) {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: 'FETCH_STARTED' })
//       const data = await fetch(url).then(r => r.json())
//       dispatch({ type: 'FETCH_SUCCESS', payload: data, localStorage: 'data' })
//     }
//     catch (error) {
//       dispatch({ type: 'FETCH_FAILED', payload: error.message })
//     }
//   }
// }

// // localStorage middleware
// const localStorage = (store) => (next) => (action) => {
//   const result = next(action)
//   if (action.localStorage !== undefined) {
//     window.localStorage.setItem(action.localStorage,
//       JSON.stringify(action.payload))
//   }
//   return result
// }

// // Local Storage
// function localStorageParse(key, initial) {
//   try {
//     return JSON.parse(window.localStorage.getItem(key))
//   } catch {
//     return initial
//   }
// }

// // Redux
// const { applyMiddleware, compose, createStore } = Redux;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const enhancer = composeEnhancers(applyMiddleware(logger, thunk, localStorage))
// const store = createStore(reducer, enhancer)

// // Dispatch
// const state = store.getState()
// if (state.data === null) { store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo')) }
//

// Desafio middleware

// import { TOKEN_GET, USER_GET } from './desafio-middleware/api.js'
// import store from './desafio-middleware/configureStore.js'
// import { fetch_started, fetch_success, fetch_error} from './desafio-middleware/reducers/stateFetch.js'
// import { user_started, user_success, user_error } from './desafio-middleware/reducers/stateUser.js'

// function fetchUrl(api_post_url, api_post_options) {
//   return async (dispatch) => {
//     try {
//       dispatch(fetch_started())
//       const token = await fetch(api_post_url, api_post_options).then(r => r.json())
//       dispatch(fetch_success(token))
//       if (token.token) {
//         dispatch(user_started())
//         const { api_get_url, api_get_options } = USER_GET(token.token)
//         const user = await fetch(api_get_url, api_get_options).then(r => r.json())
//         dispatch(user_success(user))
//       }
//     } catch (error) {
//       dispatch(fetch_error(error.message))
//       dispatch(user_error(error.message))
//     }
//   }
// }

// function render() {
//   const { api_post_url, api_post_options } = TOKEN_GET()
//   if (store.getState().fetchReducer.data === null) {
//     store.dispatch(fetchUrl(api_post_url, api_post_options))
//   }
// }
// render()
//
//
//  Desafio middleware projeto dog loguin e validação


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
